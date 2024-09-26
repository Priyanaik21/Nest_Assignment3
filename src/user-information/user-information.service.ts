import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { UserInformation } from './user-information.entity';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';
import { applyPaginationSearchSort } from '../utils/paginationSearchSort';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserInformationService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @InjectRepository(UserInformation)
    private readonly userInformationRepository: Repository<UserInformation>,  
  ) {}

  async create(createUserInformationDto: CreateUserInformationDto): Promise<UserInformation> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newUserInformation = this.dataSource.getRepository(UserInformation).create(createUserInformationDto);

      newUserInformation.password = bcrypt.hashSync(newUserInformation.password, 10); 
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

  async findAll(queryParams: any): Promise<UserInformation[]> {
    const searchFields = ['firstName', 'lastName', 'email', 'address'];

    const { skip, take, order, where } = applyPaginationSearchSort(queryParams,searchFields);
    return this.dataSource.getRepository(UserInformation).find({
      skip, 
      take, 
      order, 
      where: where || {},
      relations: ['students', 'instructors'], 
    });
  }

  async findOne(id:number): Promise<UserInformation> {
    const userInformation = await this.dataSource.getRepository(UserInformation).findOne({
      where: {userId:id },
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
  async findOneByEmail(email: string): Promise<UserInformation | undefined> {
    return await this.userInformationRepository.findOne({ where: { email } });
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const entity = await this.findOneByEmail(email);
    if (entity && bcrypt.compareSync(pass, entity.password)) {
      const { password, ...result } = entity;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
