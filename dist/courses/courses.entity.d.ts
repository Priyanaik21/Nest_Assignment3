import { CourseDepartment } from '../course_department/course_department.entity';
export declare class Course {
    courseId: number;
    courseName: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    courseDepartments: CourseDepartment[];
}
