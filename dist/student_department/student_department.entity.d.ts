import { Student } from '../student/student.entity';
import { Department } from '../department/department.entity';
export declare class StudentDepartment {
    studentDepartmentId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    student: Student;
    department: Department;
}
