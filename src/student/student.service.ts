import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';
import { UserInformation } from '../user-information/user-information.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(UserInformation)
    private readonly userInformationRepository: Repository<UserInformation>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const userInformation = await this.userInformationRepository.findOneBy({ userId: createStudentDto.userInformationId });

    if (!userInformation) {
      throw new Error('UserInformation not found');
    }

    const newStudent = this.studentRepository.create({ userInformation });
    return this.studentRepository.save(newStudent);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find({
      relations: ['userInformation'],
    });
  }

  async findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({
      where: { studentId: id },
      relations: ['userInformation'],
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<void> {
    const student = await this.studentRepository.findOneBy({ studentId: id });

    if (!student) {
      throw new Error('Student not found');
    }

    if (updateStudentDto.userInformationId) {
      const userInformation = await this.userInformationRepository.findOneBy({ userId: updateStudentDto.userInformationId });
      if (!userInformation) {
        throw new Error('UserInformation not found');
      }
      student.userInformation = userInformation;
    }

    await this.studentRepository.save(student);
  }

  async delete(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
