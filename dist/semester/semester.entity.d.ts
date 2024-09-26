import { CourseSemester } from '../course_semester/course_semester.entity';
export declare class Semester {
    semesterId: number;
    semesterName: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    courseSemesters: CourseSemester[];
}
