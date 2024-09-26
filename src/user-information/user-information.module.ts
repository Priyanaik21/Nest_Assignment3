import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInformationService } from './user-information.service';
import { UserInformationController } from './user-information.controller';
import { UserInformation } from './user-information.entity';
import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInformation, Student, Instructor])],
  providers: [UserInformationService],
  controllers: [UserInformationController],
  exports: [UserInformationService],
})
export class UserInformationModule {}
