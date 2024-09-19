import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';
export declare class UserInformation {
    userId: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    address: string;
    students: Student[];
    instructors: Instructor[];
}
