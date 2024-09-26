import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';
export declare class UserInformation {
    userId: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    address: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    students: Student[];
    instructors: Instructor[];
}
