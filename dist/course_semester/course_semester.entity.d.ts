import { Course } from '../courses/courses.entity';
import { Semester } from '../semester/semester.entity';
export declare class CourseSemester {
    courseSemesterId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    course: Course;
    semester: Semester;
}
