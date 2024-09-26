import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './department.dto';
import { Department } from './department.entity';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  async findAll(@Query() query:any) {
    return this.departmentService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.departmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.departmentService.delete(id);
  }
}
