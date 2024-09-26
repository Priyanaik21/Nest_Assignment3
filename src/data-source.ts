import { DataSource } from 'typeorm';
import { UserInformation } from './user-information/user-information.entity';
import { Student } from './student/student.entity';
import { Instructor } from './instructor/instructor.entity';
import { StudentInstructor } from './student-instructor/student-instructor.entity';
import { Course } from './courses/courses.entity';
import { CourseDepartment } from './course_department/course_department.entity';
import { Department } from './department/department.entity';
import { InstructorDepartment } from './instructor_department/instructor_department.entity';
import { StudentDepartment } from './student_department/student_department.entity';
import { Semester } from './semester/semester.entity';
import { CourseSemester } from './course_semester/course_semester.entity';


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'collegedb',
    entities: [UserInformation, Student,Instructor,StudentInstructor,Course,CourseDepartment,Department,InstructorDepartment,StudentDepartment,Semester,CourseSemester],
    migrations: ["src/migrations/*.ts"],
    synchronize: false, 
    logging: true,
});
