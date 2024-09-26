import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentDepartmentService } from './student_department.service';
import { StudentDepartmentController } from './student_department.controller';
import { StudentDepartment } from './student_department.entity';
import { Student } from '../student/student.entity';
import { Department } from '../department/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentDepartment, Student, Department])],
  providers: [StudentDepartmentService],
  controllers: [StudentDepartmentController],
})
export class StudentDepartmentModule {}
