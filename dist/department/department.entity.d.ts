import { InstructorDepartment } from '../instructor_department/instructor_department.entity';
import { StudentDepartment } from '../student_department/student_department.entity';
import { CourseDepartment } from '../course_department/course_department.entity';
export declare class Department {
    departmentId: number;
    departmentName: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    instructorDepartments: InstructorDepartment[];
    studentDepartments: StudentDepartment[];
    courseDepartments: CourseDepartment[];
}
