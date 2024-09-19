import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserInformationService } from './user-information.service';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';

@Controller('user-information')
export class UserInformationController {
  constructor(private readonly userInformationService: UserInformationService) {}

  @Post()
  async create(@Body() createUserInformationDto: CreateUserInformationDto) {
    return this.userInformationService.create(createUserInformationDto);
  }

  @Get()
  async findAll() {
    return this.userInformationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
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
