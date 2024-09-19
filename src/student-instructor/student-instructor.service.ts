import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { StudentInstructor } from './student-instructor.entity';
import { CreateStudentInstructorDto, UpdateStudentInstructorDto } from './student-instructor.dto';
import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';

@Injectable()
export class StudentInstructorService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @InjectRepository(StudentInstructor)
    private readonly studentInstructorRepository: Repository<StudentInstructor>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
  ) {}

  async create(createStudentInstructorDto: CreateStudentInstructorDto): Promise<StudentInstructor> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const student = await queryRunner.manager.findOne(Student, {
        where: { studentId: createStudentInstructorDto.studentId },
      });
      const instructor = await queryRunner.manager.findOne(Instructor, {
        where: { instructorId: createStudentInstructorDto.instructorId },
      });

      if (!student || !instructor) {
        throw new NotFoundException('Student or Instructor not found');
      }

      const newStudentInstructor = this.studentInstructorRepository.create({
        student,
        instructor,
      });

      const savedStudentInstructor = await queryRunner.manager.save(StudentInstructor, newStudentInstructor);
      await queryRunner.commitTransaction();
      return savedStudentInstructor;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<StudentInstructor[]> {
    return this.studentInstructorRepository.find({
      relations: ['student', 'instructor'],
    });
  }

  async findOne(id: number): Promise<StudentInstructor> {
    const studentInstructor = await this.studentInstructorRepository.findOne({
      where: { studentInstructorId: id },
      relations: ['student', 'instructor'],
    });

    if (!studentInstructor) {
      throw new NotFoundException('StudentInstructor not found');
    }

    return studentInstructor;
  }

  async update(id: number, updateStudentInstructorDto: UpdateStudentInstructorDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const studentInstructor = await queryRunner.manager.findOne(StudentInstructor, {
        where: { studentInstructorId: id },
        relations: ['student', 'instructor'],
      });

      if (!studentInstructor) {
        throw new NotFoundException('StudentInstructor not found');
      }

      if (updateStudentInstructorDto.studentId) {
        const student = await queryRunner.manager.findOne(Student, {
          where: { studentId: updateStudentInstructorDto.studentId },
        });
        if (student) {
          studentInstructor.student = student;
        }
      }

      if (updateStudentInstructorDto.instructorId) {
        const instructor = await queryRunner.manager.findOne(Instructor, {
          where: { instructorId: updateStudentInstructorDto.instructorId },
        });
        if (instructor) {
          studentInstructor.instructor = instructor;
        }
      }

      await queryRunner.manager.save(StudentInstructor, studentInstructor);
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
      const result = await queryRunner.manager.delete(StudentInstructor, id);
      if (result.affected === 0) {
        throw new NotFoundException('StudentInstructor not found');
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

