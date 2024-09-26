import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { StudentDepartment } from './student_department.entity';
import { CreateStudentDepartmentDto, UpdateStudentDepartmentDto } from './student_department.dto';
import { Student } from '../student/student.entity';
import { Department } from '../department/department.entity';

@Injectable()
export class StudentDepartmentService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    @InjectRepository(StudentDepartment) private readonly studentDepartmentRepository: Repository<StudentDepartment>,
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
    @InjectRepository(Department) private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createStudentDepartmentDto: CreateStudentDepartmentDto): Promise<StudentDepartment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const student = await queryRunner.manager.findOne(Student, {
        where: { studentId: createStudentDepartmentDto.studentId },
      });
      const department = await queryRunner.manager.findOne(Department, {
        where: { departmentId: createStudentDepartmentDto.departmentId },
      });

      if (!student || !department) {
        throw new NotFoundException('Student or Department not found');
      }

      const newStudentDepartment = this.studentDepartmentRepository.create({
        student,
        department,
      });

      const savedStudentDepartment = await queryRunner.manager.save(StudentDepartment, newStudentDepartment);
      await queryRunner.commitTransaction();
      return savedStudentDepartment;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<StudentDepartment[]> {
    return this.studentDepartmentRepository.find({
      relations: ['student', 'department'],
    });
  }

  async findOne(id: number): Promise<StudentDepartment> {
    const studentDepartment = await this.studentDepartmentRepository.findOne({
      where: { studentDepartmentId: id },
      relations: ['student', 'department'],
    });

    if (!studentDepartment) {
      throw new NotFoundException('StudentDepartment not found');
    }

    return studentDepartment;
  }

  async update(id: number, updateStudentDepartmentDto: UpdateStudentDepartmentDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const studentDepartment = await queryRunner.manager.findOne(StudentDepartment, {
        where: { studentDepartmentId: id },
        relations: ['student', 'department'],
      });

      if (!studentDepartment) {
        throw new NotFoundException('StudentDepartment not found');
      }

      if (updateStudentDepartmentDto.studentId) {
        const student = await queryRunner.manager.findOne(Student, {
          where: { studentId: updateStudentDepartmentDto.studentId },
        });
        if (student) {
          studentDepartment.student = student;
        }
      }

      if (updateStudentDepartmentDto.departmentId) {
        const department = await queryRunner.manager.findOne(Department, {
          where: { departmentId: updateStudentDepartmentDto.departmentId },
        });
        if (department) {
          studentDepartment.department = department;
        }
      }

      await queryRunner.manager.save(StudentDepartment, studentDepartment);
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
      const result = await queryRunner.manager.delete(StudentDepartment, id);
      if (result.affected === 0) {
        throw new NotFoundException('StudentDepartment not found');
      }

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
