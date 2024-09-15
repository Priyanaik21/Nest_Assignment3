import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(studentData: Student): Promise<Student> {
    return this.studentRepository.save(studentData);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    return this.studentRepository.findOneBy({ student_id: id });
  }

  async update(id: number, studentData: Partial<Student>): Promise<void> {
    await this.studentRepository.update(id, studentData);
  }

  async delete(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
