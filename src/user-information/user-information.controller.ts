import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { UserInformationService } from './user-information.service';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user-information')
export class UserInformationController {
  constructor(private readonly userInformationService: UserInformationService) {}

  @Post()
  async create(@Body() createUserInformationDto: CreateUserInformationDto) {
    return this.userInformationService.create(createUserInformationDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Query() query: any) {
    return this.userInformationService.findAll(query);
  }

  @Get(':id')
async findOne(@Param('id') id:number) { 
  return this.userInformationService.findOne(id); 
}

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserInformationDto: UpdateUserInformationDto) {
    return this.userInformationService.update(id, updateUserInformationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userInformationService.delete(id);
  }
}
