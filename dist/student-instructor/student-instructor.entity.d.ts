import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';
export declare class StudentInstructor {
    studentInstructorId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    student: Student;
    instructor: Instructor;
}
