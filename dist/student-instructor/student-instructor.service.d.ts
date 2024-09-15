import { Repository } from 'typeorm';
import { StudentInstructor } from './student-instructor.entity';
export declare class StudentInstructorService {
    private readonly studentInstructorRepository;
    constructor(studentInstructorRepository: Repository<StudentInstructor>);
    create(studentInstructorData: StudentInstructor): Promise<StudentInstructor>;
    findAll(): Promise<StudentInstructor[]>;
    findOne(id: number): Promise<StudentInstructor>;
    update(id: number, studentInstructorData: Partial<StudentInstructor>): Promise<void>;
    delete(id: number): Promise<void>;
}
