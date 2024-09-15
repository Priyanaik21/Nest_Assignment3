import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(studentData: Student): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, studentData: Partial<Student>): Promise<void>;
    delete(id: number): Promise<void>;
}
