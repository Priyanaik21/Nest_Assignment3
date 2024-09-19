import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentInstructor } from './student-instructor.entity';
import { CreateStudentInstructorDto, UpdateStudentInstructorDto } from './student-instructor.dto';
import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';

@Injectable()
export class StudentInstructorService {
  constructor(
    @InjectRepository(StudentInstructor)
    private readonly studentInstructorRepository: Repository<StudentInstructor>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
  ) {}

  async create(createStudentInstructorDto: CreateStudentInstructorDto): Promise<StudentInstructor> {
    const student = await this.studentRepository.findOneBy({ studentId: createStudentInstructorDto.studentId });
    const instructor = await this.instructorRepository.findOneBy({ instructorId: createStudentInstructorDto.instructorId });

    if (!student || !instructor) {
      throw new NotFoundException('Student or Instructor not found');
    }

    const newStudentInstructor = this.studentInstructorRepository.create({
      student,
      instructor,
    });

    return this.studentInstructorRepository.save(newStudentInstructor);
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
    const studentInstructor = await this.studentInstructorRepository.findOneBy({ studentInstructorId: id }); 

    if (!studentInstructor) {
      throw new NotFoundException('StudentInstructor not found');
    }

    if (updateStudentInstructorDto.studentId) {
      const student = await this.studentRepository.findOneBy({ studentId: updateStudentInstructorDto.studentId });
      if (student) {
        studentInstructor.student = student;
      }
    }

    if (updateStudentInstructorDto.instructorId) {
      const instructor = await this.instructorRepository.findOneBy({ instructorId: updateStudentInstructorDto.instructorId });
      if (instructor) {
        studentInstructor.instructor = instructor;
      }
    }

    await this.studentInstructorRepository.save(studentInstructor);
  }

  async delete(id: number): Promise<void> {
    const result = await this.studentInstructorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('StudentInstructor not found');
    }
  }
}
