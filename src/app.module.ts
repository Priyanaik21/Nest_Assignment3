import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInformationModule } from './user-information/user-information.module';
import { StudentModule } from './student/student.module';
import { InstructorModule } from './instructor/instructor.module';
import { StudentInstructorModule } from './student-instructor/student-instructor.module';
import { UserInformation } from './user-information/user-information.entity';
import { Student } from './student/student.entity';
import { Instructor } from './instructor/instructor.entity';
import { StudentInstructor } from './student-instructor/student-instructor.entity';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './courses/courses.module';
import { CourseDepartment } from './course_department/course_department.entity';
import { InstructorDepartment } from './instructor_department/instructor_department.entity';
import { StudentDepartment } from './student_department/student_department.entity';
import { CourseDepartmentModule } from './course_department/course_department.module';
import { InstructorDepartmentModule } from './instructor_department/instructor_department.module';
import { StudentDepartmentModule } from './student_department/student_department.module';
import { Department } from './department/department.entity';
import { Course } from './courses/courses.entity';
import { SemesterModule } from './semester/semester.module';
import { CourseSemesterModule } from './course_semester/course_semester.module';
import { Semester } from './semester/semester.entity';
import { CourseSemester } from './course_semester/course_semester.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',   
      database: 'collegedb',
      entities: [UserInformation, Student, Instructor, StudentInstructor,Department,StudentDepartment,InstructorDepartment,CourseDepartment,Course,Semester,CourseSemester],
      synchronize: true,       
      logging: true,
    }),
    UserInformationModule,
    StudentModule,
    InstructorModule,
    StudentInstructorModule,
    DepartmentModule,
    CourseModule,
    CourseDepartmentModule,
    InstructorDepartmentModule,
    StudentDepartmentModule,
    SemesterModule,
    CourseSemesterModule,
    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
