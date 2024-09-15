import { Repository } from 'typeorm';
import { Instructor } from './instructor.entity';
export declare class InstructorService {
    private readonly instructorRepository;
    constructor(instructorRepository: Repository<Instructor>);
    create(instructorData: Instructor): Promise<Instructor>;
    findAll(): Promise<Instructor[]>;
    findOne(id: number): Promise<Instructor>;
    update(id: number, instructorData: Partial<Instructor>): Promise<void>;
    delete(id: number): Promise<void>;
}
