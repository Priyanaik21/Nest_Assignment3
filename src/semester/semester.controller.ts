import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { SemesterService } from './semester.service';
import { CreateSemesterDto, UpdateSemesterDto } from './semester.dto';
import { Semester } from './semester.entity';

@Controller('semesters')
export class SemesterController {
  constructor(private readonly semesterService: SemesterService) {}

  @Post()
  async create(@Body() createSemesterDto: CreateSemesterDto) {
    return this.semesterService.create(createSemesterDto);
  }

  @Get()
  async findAll(@Query() query:any) {
    return this.semesterService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.semesterService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateSemesterDto: UpdateSemesterDto) {
    return this.semesterService.update(id, updateSemesterDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.semesterService.delete(id);
  }
}
