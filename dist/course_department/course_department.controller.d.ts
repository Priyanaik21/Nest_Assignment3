import { CourseDepartmentService } from './course_department.service';
import { CreateCourseDepartmentDto, UpdateCourseDepartmentDto } from './course_department.dto';
import { CourseDepartment } from './course_department.entity';
export declare class CourseDepartmentController {
    private readonly courseDepartmentService;
    constructor(courseDepartmentService: CourseDepartmentService);
    create(createCourseDepartmentDto: CreateCourseDepartmentDto): Promise<CourseDepartment>;
    findAll(query: any): Promise<CourseDepartment[]>;
    findOne(id: number): Promise<CourseDepartment>;
    update(id: number, updateCourseDepartmentDto: UpdateCourseDepartmentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
