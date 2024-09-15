import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInformation } from './user-information.entity';

@Injectable()
export class UserInformationService {
  constructor(
    @InjectRepository(UserInformation)
    private readonly userInformationRepository: Repository<UserInformation>,
  ) {}

  async create(userInformationData: UserInformation): Promise<UserInformation> {
    return this.userInformationRepository.save(userInformationData);
  }

  async findAll(): Promise<UserInformation[]> {
    return this.userInformationRepository.find();
  }

  async findOne(id: number): Promise<UserInformation> {
    return this.userInformationRepository.findOneBy({ user_id: id });
  }

  async update(id: number, userInformationData: Partial<UserInformation>): Promise<void> {
    await this.userInformationRepository.update(id, userInformationData);
  }

  async delete(id: number): Promise<void> {
    await this.userInformationRepository.delete(id);
  }
}
