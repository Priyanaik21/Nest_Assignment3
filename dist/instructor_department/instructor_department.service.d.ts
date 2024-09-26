import { DataSource, Repository } from 'typeorm';
import { InstructorDepartment } from './instructor_department.entity';
import { CreateInstructorDepartmentDto, UpdateInstructorDepartmentDto } from './instructor_department.dto';
import { Instructor } from '../instructor/instructor.entity';
import { Department } from '../department/department.entity';
export declare class InstructorDepartmentService {
    private readonly dataSource;
    private readonly instructorDepartmentRepository;
    private readonly instructorRepository;
    private readonly departmentRepository;
    constructor(dataSource: DataSource, instructorDepartmentRepository: Repository<InstructorDepartment>, instructorRepository: Repository<Instructor>, departmentRepository: Repository<Department>);
    create(createInstructorDepartmentDto: CreateInstructorDepartmentDto): Promise<InstructorDepartment>;
    findAll(queryParams: any): Promise<InstructorDepartment[]>;
    findAllDetails(queryParams: any): Promise<InstructorDepartment[]>;
    findOne(id: number): Promise<InstructorDepartment>;
    update(id: number, updateInstructorDepartmentDto: UpdateInstructorDepartmentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
