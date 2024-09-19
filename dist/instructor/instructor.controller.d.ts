import { InstructorService } from './instructor.service';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
export declare class InstructorController {
    private readonly instructorService;
    constructor(instructorService: InstructorService);
    create(createInstructorDto: CreateInstructorDto): Promise<import("./instructor.entity").Instructor>;
    findAll(): Promise<import("./instructor.entity").Instructor[]>;
    findOne(id: number): Promise<import("./instructor.entity").Instructor>;
    update(id: number, updateInstructorDto: UpdateInstructorDto): Promise<void>;
    delete(id: number): Promise<void>;
}
