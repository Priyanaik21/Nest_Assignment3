import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseSemesterService } from './course_semester.service';
import { CourseSemesterController } from './course_semester.controller';
import { CourseSemester } from './course_semester.entity';
import { Course } from '../courses/courses.entity';
import { Semester } from '../semester/semester.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseSemester, Course, Semester])],
  providers: [CourseSemesterService],
  controllers: [CourseSemesterController],
})
export class CourseSemesterModule {}
