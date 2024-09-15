import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentInstructor } from './student-instructor.entity';

@Injectable()
export class StudentInstructorService {
  constructor(
    @InjectRepository(StudentInstructor)
    private readonly studentInstructorRepository: Repository<StudentInstructor>,
  ) {}

  async create(studentInstructorData: StudentInstructor): Promise<StudentInstructor> {
    return this.studentInstructorRepository.save(studentInstructorData);
  }

  async findAll(): Promise<StudentInstructor[]> {
    return this.studentInstructorRepository.find();
  }

  async findOne(id: number): Promise<StudentInstructor> {
    return this.studentInstructorRepository.findOneBy({ student_instructor_id: id });
  }

  async update(id: number, studentInstructorData: Partial<StudentInstructor>): Promise<void> {
    await this.studentInstructorRepository.update(id, studentInstructorData);
  }

  async delete(id: number): Promise<void> {
    await this.studentInstructorRepository.delete(id);
  }
}
