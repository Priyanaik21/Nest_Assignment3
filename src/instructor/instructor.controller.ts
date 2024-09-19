import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';

@Controller('instructors')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post()
  async create(@Body() createInstructorDto: CreateInstructorDto) {
    return this.instructorService.create(createInstructorDto);
  }

  @Get()
  async findAll() {
    return this.instructorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.instructorService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateInstructorDto: UpdateInstructorDto) {
    return this.instructorService.update(id, updateInstructorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.instructorService.delete(id);
  }
}
