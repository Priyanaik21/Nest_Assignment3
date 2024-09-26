import { InstructorService } from './instructor.service';
import { Instructor } from './instructor.entity';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
export declare class InstructorController {
    private readonly instructorService;
    constructor(instructorService: InstructorService);
    create(createInstructorDto: CreateInstructorDto): Promise<Instructor>;
    findAll(query: any): Promise<Instructor[]>;
    findOne(id: number): Promise<Instructor>;
    update(id: number, updateInstructorDto: UpdateInstructorDto): Promise<void>;
    delete(id: number): Promise<void>;
}
