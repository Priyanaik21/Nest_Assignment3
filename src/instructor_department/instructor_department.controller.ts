import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { InstructorDepartmentService } from './instructor_department.service';
import { CreateInstructorDepartmentDto, UpdateInstructorDepartmentDto } from './instructor_department.dto';
import { InstructorDepartment } from './instructor_department.entity';

@Controller('instructor-department')
export class InstructorDepartmentController {
  constructor(private readonly instructorDepartmentService: InstructorDepartmentService) {}

  @Post()
  async create(@Body() createInstructorDepartmentDto: CreateInstructorDepartmentDto) {
    return this.instructorDepartmentService.create(createInstructorDepartmentDto);
  }

  @Get()
  async findAll(@Query() query:any) {
    return this.instructorDepartmentService.findAll(query);
  }
  @Get('/departments')
  async findAllDetails(@Query() query:any) {
    return this.instructorDepartmentService.findAllDetails(query);
  }
  
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.instructorDepartmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateInstructorDepartmentDto: UpdateInstructorDepartmentDto) {
    return this.instructorDepartmentService.update(id, updateInstructorDepartmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.instructorDepartmentService.delete(id);
  }
}
