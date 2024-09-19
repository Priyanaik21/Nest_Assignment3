import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Instructor } from './instructor.entity';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
import { UserInformation } from '../user-information/user-information.entity';

@Injectable()
export class InstructorService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
    @InjectRepository(UserInformation)
    private readonly userInformationRepository: Repository<UserInformation>,
  ) {}

  async create(createInstructorDto: CreateInstructorDto): Promise<Instructor> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const userInformation = await queryRunner.manager.findOne(UserInformation, {
        where: { userId: createInstructorDto.userInformationId },
      });

      if (!userInformation) {
        throw new NotFoundException('UserInformation not found');
      }

      const newInstructor = this.instructorRepository.create({
        userInformation,
      });

      const savedInstructor = await queryRunner.manager.save(Instructor, newInstructor);
      await queryRunner.commitTransaction();
      return savedInstructor;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<Instructor[]> {
    return this.instructorRepository.find({
      relations: ['userInformation'],
    });
  }

  async findOne(id: number): Promise<Instructor> {
    const instructor = await this.instructorRepository.findOne({
      where: { instructorId: id },
      relations: ['userInformation'],
    });

    if (!instructor) {
      throw new NotFoundException('Instructor not found');
    }

    return instructor;
  }

  async update(id: number, updateInstructorDto: UpdateInstructorDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const instructor = await queryRunner.manager.findOne(Instructor, {
        where: { instructorId: id },
        relations: ['userInformation'],
      });

      if (!instructor) {
        throw new NotFoundException('Instructor not found');
      }

      if (updateInstructorDto.userInformationId) {
        const userInformation = await queryRunner.manager.findOne(UserInformation, {
          where: { userId: updateInstructorDto.userInformationId },
        });

        if (!userInformation) {
          throw new NotFoundException('UserInformation not found');
        }

        instructor.userInformation = userInformation;
      }

      await queryRunner.manager.save(Instructor, instructor);
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
      const instructor = await queryRunner.manager.findOne(Instructor, {
        where: { instructorId: id },
      });

      if (!instructor) {
        throw new NotFoundException('Instructor not found');
      }

      await queryRunner.manager.delete(Instructor, id);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
