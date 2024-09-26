import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentDepartmentService } from './student_department.service';
import { CreateStudentDepartmentDto, UpdateStudentDepartmentDto } from './student_department.dto';

@Controller('student-department')
export class StudentDepartmentController {
  constructor(private readonly studentDepartmentService: StudentDepartmentService) {}

  @Post()
  async create(@Body() createStudentDepartmentDto: CreateStudentDepartmentDto) {
    return this.studentDepartmentService.create(createStudentDepartmentDto);
  }

  @Get()
  async findAll() {
    return this.studentDepartmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.studentDepartmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateStudentDepartmentDto: UpdateStudentDepartmentDto) {
    return this.studentDepartmentService.update(id, updateStudentDepartmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.studentDepartmentService.delete(id);
  }
}
