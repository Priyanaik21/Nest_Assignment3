import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentInstructorService } from './student-instructor.service';
import { StudentInstructorController } from './student-instructor.controller';
import { StudentInstructor } from './student-instructor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentInstructor])],
  providers: [StudentInstructorService],
  controllers: [StudentInstructorController],
})
export class StudentInstructorModule {}
