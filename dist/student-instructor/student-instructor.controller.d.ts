import { StudentInstructorService } from './student-instructor.service';
import { CreateStudentInstructorDto, UpdateStudentInstructorDto } from './student-instructor.dto';
export declare class StudentInstructorController {
    private readonly studentInstructorService;
    constructor(studentInstructorService: StudentInstructorService);
    create(createStudentInstructorDto: CreateStudentInstructorDto): Promise<import("./student-instructor.entity").StudentInstructor>;
    findAll(): Promise<import("./student-instructor.entity").StudentInstructor[]>;
    findOne(id: number): Promise<import("./student-instructor.entity").StudentInstructor>;
    update(id: number, updateStudentInstructorDto: UpdateStudentInstructorDto): Promise<void>;
    delete(id: number): Promise<void>;
}
