import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
