import { DataSource } from 'typeorm';
import { UserInformation } from './user-information/user-information.entity';
import { Student } from './student/student.entity';
import { Instructor } from './instructor/instructor.entity';
import { StudentInstructor } from './student-instructor/student-instructor.entity';


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'collegedb',
    entities: [UserInformation, Student,Instructor,StudentInstructor,],
    migrations: ["src/migrations/*.ts"],
    synchronize: false, 
    logging: true,
});
