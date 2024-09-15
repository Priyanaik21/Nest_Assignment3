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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',   
      database: 'collegedb',
      entities: [UserInformation, Student, Instructor, StudentInstructor],

      synchronize: true,       
      logging: true,
    }),
    UserInformationModule,
    StudentModule,
    InstructorModule,
    StudentInstructorModule,
  ],
})
export class AppModule {}
