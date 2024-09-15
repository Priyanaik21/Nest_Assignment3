import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserInformationService } from './user-information.service';
import { UserInformation } from './user-information.entity';

@Controller('user-information')
export class UserInformationController {
  constructor(private readonly userInformationService: UserInformationService) {}

  @Post()
  async create(@Body() userInformationData: UserInformation): Promise<UserInformation> {
    console.log('Request Body:', userInformationData);
    return this.userInformationService.create(userInformationData);
  }

  @Get()
  async findAll(): Promise<UserInformation[]> {
    return this.userInformationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserInformation> {
    return this.userInformationService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userInformationData: Partial<UserInformation>): Promise<void> {
    return this.userInformationService.update(id, userInformationData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userInformationService.delete(id);
  }
}
