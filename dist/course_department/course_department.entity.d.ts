import { Course } from '../courses/courses.entity';
import { Department } from '../department/department.entity';
export declare class CourseDepartment {
    courseDepartmentId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    course: Course;
    department: Department;
}
