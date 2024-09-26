import { DataSource, Repository } from 'typeorm';
import { CourseDepartment } from './course_department.entity';
import { CreateCourseDepartmentDto, UpdateCourseDepartmentDto } from './course_department.dto';
import { Course } from '../courses/courses.entity';
import { Department } from '../department/department.entity';
export declare class CourseDepartmentService {
    private readonly dataSource;
    private readonly courseDepartmentRepository;
    private readonly courseRepository;
    private readonly departmentRepository;
    constructor(dataSource: DataSource, courseDepartmentRepository: Repository<CourseDepartment>, courseRepository: Repository<Course>, departmentRepository: Repository<Department>);
    create(createCourseDepartmentDto: CreateCourseDepartmentDto): Promise<CourseDepartment>;
    findAll(queryParams: any): Promise<CourseDepartment[]>;
    findOne(id: number): Promise<CourseDepartment>;
    update(id: number, updateCourseDepartmentDto: UpdateCourseDepartmentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
