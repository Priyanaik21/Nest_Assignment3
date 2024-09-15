import { StudentService } from './student.service';
import { Student } from './student.entity';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(studentData: Student): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, studentData: Partial<Student>): Promise<void>;
    delete(id: number): Promise<void>;
}
