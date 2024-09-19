import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instructor } from './instructor.entity';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
import { UserInformation } from '../user-information/user-information.entity';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
    @InjectRepository(UserInformation)
    private readonly userInformationRepository: Repository<UserInformation>,
  ) {}

  async create(createInstructorDto: CreateInstructorDto): Promise<Instructor> {
    const userInformation = await this.userInformationRepository.findOneBy({
      userId: createInstructorDto.userInformationId,
    });

    if (!userInformation) {
      throw new Error('UserInformation not found');
    }

    const newInstructor = this.instructorRepository.create({
      userInformation,
    });

    return this.instructorRepository.save(newInstructor);
  }

  async findAll(): Promise<Instructor[]> {
    return this.instructorRepository.find({
      relations: ['userInformation'],
    });
  }

  async findOne(id: number): Promise<Instructor> {
    return this.instructorRepository.findOne({
      where: { instructorId: id },
      relations: ['userInformation'],
    });
  }

  async update(id: number, updateInstructorDto: UpdateInstructorDto): Promise<void> {
    const instructor = await this.instructorRepository.findOne({
      where: { instructorId: id },
      relations: ['userInformation'],
    });

    if (!instructor) {
      throw new Error('Instructor not found');
    }

    if (updateInstructorDto.userInformationId) {
      const userInformation = await this.userInformationRepository.findOneBy({
        userId: updateInstructorDto.userInformationId,
      });

      if (!userInformation) {
        throw new Error('UserInformation not found');
      }

      instructor.userInformation = userInformation;
    }

    await this.instructorRepository.save(instructor);
  }

  async delete(id: number): Promise<void> {
    const instructor = await this.instructorRepository.findOne({ where: { instructorId: id } });

    if (!instructor) {
      throw new Error('Instructor not found');
    }

    await this.instructorRepository.delete(id);
  }
}
