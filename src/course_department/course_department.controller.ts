import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { CourseDepartmentService } from './course_department.service';
import { CreateCourseDepartmentDto, UpdateCourseDepartmentDto } from './course_department.dto';
import { CourseDepartment } from './course_department.entity';

@Controller('course-department')
export class CourseDepartmentController {
  constructor(private readonly courseDepartmentService: CourseDepartmentService) {}

  @Post()
  async create(@Body() createCourseDepartmentDto: CreateCourseDepartmentDto) {
    return this.courseDepartmentService.create(createCourseDepartmentDto);
  }

  @Get()
  async findAll(@Query() query:any) {
    return this.courseDepartmentService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.courseDepartmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCourseDepartmentDto: UpdateCourseDepartmentDto) {
    return this.courseDepartmentService.update(id, updateCourseDepartmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.courseDepartmentService.delete(id);
  }
}
