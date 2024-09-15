import { StudentInstructorService } from './student-instructor.service';
import { StudentInstructor } from './student-instructor.entity';
export declare class StudentInstructorController {
    private readonly studentInstructorService;
    constructor(studentInstructorService: StudentInstructorService);
    create(studentInstructorData: StudentInstructor): Promise<StudentInstructor>;
    findAll(): Promise<StudentInstructor[]>;
    findOne(id: number): Promise<StudentInstructor>;
    update(id: number, studentInstructorData: Partial<StudentInstructor>): Promise<void>;
    delete(id: number): Promise<void>;
}
