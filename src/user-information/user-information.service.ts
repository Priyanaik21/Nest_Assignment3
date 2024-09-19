import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, QueryRunner } from 'typeorm';
import { UserInformation } from './user-information.entity';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';

@Injectable()
export class UserInformationService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(createUserInformationDto: CreateUserInformationDto): Promise<UserInformation> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newUserInformation = this.dataSource.getRepository(UserInformation).create(createUserInformationDto);
      const savedUserInformation = await queryRunner.manager.save(newUserInformation);
      await queryRunner.commitTransaction();
      return savedUserInformation;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err; 
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<UserInformation[]> {
    return this.dataSource.getRepository(UserInformation).find({
      relations: ['students', 'instructors'],
    });
  }

  async findOne(id: number): Promise<UserInformation> {
    const userInformation = await this.dataSource.getRepository(UserInformation).findOne({
      where: { userId: id },
      relations: ['students', 'instructors'],
    });

    if (!userInformation) {
      throw new NotFoundException('UserInformation not found');
    }

    return userInformation;
  }

  async update(id: number, updateUserInformationDto: UpdateUserInformationDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const userInformation = await queryRunner.manager.findOne(UserInformation, {
        where: { userId: id },
      });

      if (!userInformation) {
        throw new NotFoundException('UserInformation not found');
      }

      Object.assign(userInformation, updateUserInformationDto);
      await queryRunner.manager.save(userInformation);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: number): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const userInformation = await queryRunner.manager.findOne(UserInformation, {
        where: { userId: id },
      });

      if (!userInformation) {
        throw new NotFoundException('UserInformation not found');
      }

      await queryRunner.manager.delete(UserInformation, id);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err; 
    } finally {
      await queryRunner.release();
    }
  }
}
