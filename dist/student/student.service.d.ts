import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';
import { UserInformation } from '../user-information/user-information.entity';
export declare class StudentService {
    private readonly studentRepository;
    private readonly userInformationRepository;
    constructor(studentRepository: Repository<Student>, userInformationRepository: Repository<UserInformation>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
