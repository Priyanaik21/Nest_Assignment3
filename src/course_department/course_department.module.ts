import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseDepartmentService } from './course_department.service';
import { CourseDepartmentController } from './course_department.controller';
import { CourseDepartment } from './course_department.entity';
import { Course } from '../courses/courses.entity';
import { Department } from '../department/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseDepartment, Course, Department])],
  providers: [CourseDepartmentService],
  controllers: [CourseDepartmentController],
})
export class CourseDepartmentModule {}
