import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentInstructorService } from './student-instructor.service';
import { CreateStudentInstructorDto, UpdateStudentInstructorDto } from './student-instructor.dto';

@Controller('student-instructor')
export class StudentInstructorController {
  constructor(private readonly studentInstructorService: StudentInstructorService) {}

  @Post()
  async create(@Body() createStudentInstructorDto: CreateStudentInstructorDto) {
    return this.studentInstructorService.create(createStudentInstructorDto);
  }

  @Get()
  async findAll() {
    return this.studentInstructorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.studentInstructorService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateStudentInstructorDto: UpdateStudentInstructorDto) {
    return this.studentInstructorService.update(id, updateStudentInstructorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.studentInstructorService.delete(id);
  }
}
