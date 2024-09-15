import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { Instructor } from './instructor.entity';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post()
  async create(@Body() instructorData: Instructor): Promise<Instructor> {
    return this.instructorService.create(instructorData);
  }

  @Get()
  async findAll(): Promise<Instructor[]> {
    return this.instructorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Instructor> {
    return this.instructorService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() instructorData: Partial<Instructor>): Promise<void> {
    return this.instructorService.update(id, instructorData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.instructorService.delete(id);
  }
}
