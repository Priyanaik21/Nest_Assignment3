import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentData: Student): Promise<Student> {
    return this.studentService.create(studentData);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() studentData: Partial<Student>): Promise<void> {
    return this.studentService.update(id, studentData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.studentService.delete(id);
  }
}
