import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';
import { UserInformation } from '../user-information/user-information.entity';
import { applyPaginationSearchSort } from '../utils/paginationSearchSort';

@Injectable()
export class StudentService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(UserInformation)
    private readonly userInformationRepository: Repository<UserInformation>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const userInformation = await queryRunner.manager.findOne(UserInformation, {
        where: { userId: createStudentDto.userInformationId },
      });

      if (!userInformation) {
        throw new NotFoundException('UserInformation not found');
      }

      const newStudent = this.studentRepository.create({ userInformation });
      const savedStudent = await queryRunner.manager.save(Student, newStudent);

      await queryRunner.commitTransaction();
      return savedStudent;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(queryParams: any): Promise<Student[]> {
    const searchFields = ['studentId'];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);
    return this.studentRepository.find({
      skip,
      take, 
      order,
      where: where || {},
      relations: ['userInformation'],
    });
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { studentId: id },
      relations: ['userInformation'],
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const student = await queryRunner.manager.findOne(Student, {
        where: { studentId: id },
      });

      if (!student) {
        throw new NotFoundException('Student not found');
      }

      if (updateStudentDto.userInformationId) {
        const userInformation = await queryRunner.manager.findOne(UserInformation, {
          where: { userId: updateStudentDto.userInformationId },
        });

        if (!userInformation) {
          throw new NotFoundException('UserInformation not found');
        }

        student.userInformation = userInformation;
      }

      await queryRunner.manager.save(Student, student);
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
      const student = await queryRunner.manager.findOne(Student, {
        where: { studentId: id },
      });

      if (!student) {
        throw new NotFoundException('Student not found');
      }

      await queryRunner.manager.delete(Student, id);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
