import { DataSource, Repository } from 'typeorm';
import { StudentDepartment } from './student_department.entity';
import { CreateStudentDepartmentDto, UpdateStudentDepartmentDto } from './student_department.dto';
import { Student } from '../student/student.entity';
import { Department } from '../department/department.entity';
export declare class StudentDepartmentService {
    private readonly dataSource;
    private readonly studentDepartmentRepository;
    private readonly studentRepository;
    private readonly departmentRepository;
    constructor(dataSource: DataSource, studentDepartmentRepository: Repository<StudentDepartment>, studentRepository: Repository<Student>, departmentRepository: Repository<Department>);
    create(createStudentDepartmentDto: CreateStudentDepartmentDto): Promise<StudentDepartment>;
    findAll(): Promise<StudentDepartment[]>;
    findOne(id: number): Promise<StudentDepartment>;
    update(id: number, updateStudentDepartmentDto: UpdateStudentDepartmentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
