import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInformation } from './user-information.entity';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';

@Injectable()
export class UserInformationService {
  constructor(
    @InjectRepository(UserInformation)
    private readonly userInformationRepository: Repository<UserInformation>,
  ) {}

  async create(createUserInformationDto: CreateUserInformationDto): Promise<UserInformation> {
    const newUserInformation = this.userInformationRepository.create(createUserInformationDto);
    return this.userInformationRepository.save(newUserInformation);
  }

  async findAll(): Promise<UserInformation[]> {
    return this.userInformationRepository.find({
      relations: ['students', 'instructors'], 
    });
  }

  async findOne(id: number): Promise<UserInformation> {
    const userInformation = await this.userInformationRepository.findOne({
      where: { userId: id },
      relations: ['students', 'instructors'],
    });

    if (!userInformation) {
      throw new NotFoundException('UserInformation not found');
    }

    return userInformation;
  }

  async update(id: number, updateUserInformationDto: UpdateUserInformationDto): Promise<void> {
    const userInformation = await this.userInformationRepository.findOne({ where: { userId: id } });

    if (!userInformation) {
      throw new NotFoundException('UserInformation not found');
    }

    Object.assign(userInformation, updateUserInformationDto);
    await this.userInformationRepository.save(userInformation);
  }

  async delete(id: number): Promise<void> {
    const userInformation = await this.userInformationRepository.findOne({ where: { userId: id } });

    if (!userInformation) {
      throw new NotFoundException('UserInformation not found');
    }

    await this.userInformationRepository.delete(id);
  }
}
