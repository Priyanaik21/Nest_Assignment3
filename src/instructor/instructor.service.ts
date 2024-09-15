import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instructor } from './instructor.entity';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
  ) {}

  async create(instructorData: Instructor): Promise<Instructor> {
    return this.instructorRepository.save(instructorData);
  }

  async findAll(): Promise<Instructor[]> {
    return this.instructorRepository.find();
  }

  async findOne(id: number): Promise<Instructor> {
    return this.instructorRepository.findOneBy({ instructor_id: id });
  }

  async update(id: number, instructorData: Partial<Instructor>): Promise<void> {
    await this.instructorRepository.update(id, instructorData);
  }

  async delete(id: number): Promise<void> {
    await this.instructorRepository.delete(id);
  }
}
