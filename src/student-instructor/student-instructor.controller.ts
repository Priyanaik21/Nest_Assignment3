import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentInstructorService } from './student-instructor.service';
import { StudentInstructor } from './student-instructor.entity';

@Controller('student-instructor')
export class StudentInstructorController {
  constructor(private readonly studentInstructorService: StudentInstructorService) {}

  @Post()
  async create(@Body() studentInstructorData: StudentInstructor): Promise<StudentInstructor> {
    return this.studentInstructorService.create(studentInstructorData);
  }

  @Get()
  async findAll(): Promise<StudentInstructor[]> {
    return this.studentInstructorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<StudentInstructor> {
    return this.studentInstructorService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() studentInstructorData: Partial<StudentInstructor>): Promise<void> {
    return this.studentInstructorService.update(id, studentInstructorData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.studentInstructorService.delete(id);
  }
}
