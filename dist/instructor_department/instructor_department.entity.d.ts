import { Instructor } from '../instructor/instructor.entity';
import { Department } from '../department/department.entity';
export declare class InstructorDepartment {
    instructorDepartmentId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    instructor: Instructor;
    department: Department;
}
