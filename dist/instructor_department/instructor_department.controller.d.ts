import { InstructorDepartmentService } from './instructor_department.service';
import { CreateInstructorDepartmentDto, UpdateInstructorDepartmentDto } from './instructor_department.dto';
import { InstructorDepartment } from './instructor_department.entity';
export declare class InstructorDepartmentController {
    private readonly instructorDepartmentService;
    constructor(instructorDepartmentService: InstructorDepartmentService);
    create(createInstructorDepartmentDto: CreateInstructorDepartmentDto): Promise<InstructorDepartment>;
    findAll(query: any): Promise<InstructorDepartment[]>;
    findAllDetails(query: any): Promise<InstructorDepartment[]>;
    findOne(id: number): Promise<InstructorDepartment>;
    update(id: number, updateInstructorDepartmentDto: UpdateInstructorDepartmentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
