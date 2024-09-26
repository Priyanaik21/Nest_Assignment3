import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { CourseSemesterService } from './course_semester.service';
import { CreateCourseSemesterDto, UpdateCourseSemesterDto } from './course_semester.dto';
import { CourseSemester } from './course_semester.entity';

@Controller('course-semester')
export class CourseSemesterController {
  constructor(private readonly courseSemesterService: CourseSemesterService) {}

  @Post()
  async create(@Body() createCourseSemesterDto: CreateCourseSemesterDto) {
    return this.courseSemesterService.create(createCourseSemesterDto);
  }

  @Get()
  async findAll(@Query() query: any) {
    return this.courseSemesterService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.courseSemesterService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCourseSemesterDto: UpdateCourseSemesterDto) {
    return this.courseSemesterService.update(id, updateCourseSemesterDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.courseSemesterService.delete(id);
  }
}
