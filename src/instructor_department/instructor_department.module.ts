import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructorDepartmentService } from './instructor_department.service';
import { InstructorDepartmentController } from './instructor_department.controller';
import { InstructorDepartment } from './instructor_department.entity';
import { Instructor } from '../instructor/instructor.entity';
import { Department } from '../department/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstructorDepartment, Instructor, Department])],
  providers: [InstructorDepartmentService],
  controllers: [InstructorDepartmentController],
})
export class InstructorDepartmentModule {}
