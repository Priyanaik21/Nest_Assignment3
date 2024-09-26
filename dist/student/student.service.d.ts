import { DataSource, Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';
import { UserInformation } from '../user-information/user-information.entity';
export declare class StudentService {
    private readonly dataSource;
    private readonly studentRepository;
    private readonly userInformationRepository;
    constructor(dataSource: DataSource, studentRepository: Repository<Student>, userInformationRepository: Repository<UserInformation>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(queryParams: any): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
