import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInformationService } from './user-information.service';
import { UserInformationController } from './user-information.controller';
import { UserInformation } from './user-information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInformation])],
  providers: [UserInformationService],
  controllers: [UserInformationController],
})
export class UserInformationModule {}
