import { DataSource, Repository } from 'typeorm';
import { Department } from './department.entity';
import { CreateDepartmentDto, UpdateDepartmentDto } from './department.dto';
export declare class DepartmentService {
    private readonly departmentRepository;
    private readonly dataSource;
    constructor(departmentRepository: Repository<Department>, dataSource: DataSource);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAll(queryParams: any): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
