import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './student.entity';
import { UserInformation } from '../user-information/user-information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, UserInformation])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
