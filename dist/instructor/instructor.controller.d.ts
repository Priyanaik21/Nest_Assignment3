import { InstructorService } from './instructor.service';
import { Instructor } from './instructor.entity';
export declare class InstructorController {
    private readonly instructorService;
    constructor(instructorService: InstructorService);
    create(instructorData: Instructor): Promise<Instructor>;
    findAll(): Promise<Instructor[]>;
    findOne(id: number): Promise<Instructor>;
    update(id: number, instructorData: Partial<Instructor>): Promise<void>;
    delete(id: number): Promise<void>;
}
