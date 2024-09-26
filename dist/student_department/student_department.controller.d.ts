import { StudentDepartmentService } from './student_department.service';
import { CreateStudentDepartmentDto, UpdateStudentDepartmentDto } from './student_department.dto';
export declare class StudentDepartmentController {
    private readonly studentDepartmentService;
    constructor(studentDepartmentService: StudentDepartmentService);
    create(createStudentDepartmentDto: CreateStudentDepartmentDto): Promise<import("./student_department.entity").StudentDepartment>;
    findAll(): Promise<import("./student_department.entity").StudentDepartment[]>;
    findOne(id: number): Promise<import("./student_department.entity").StudentDepartment>;
    update(id: number, updateStudentDepartmentDto: UpdateStudentDepartmentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
