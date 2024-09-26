import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { CourseService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto } from './courses.dto';
import { Course } from './courses.entity';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  async findAll(@Query() query:any) {
    return this.courseService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(id, updateCourseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.courseService.delete(id);
  }
}
