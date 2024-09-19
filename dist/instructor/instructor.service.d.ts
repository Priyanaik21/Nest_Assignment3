import { Repository } from 'typeorm';
import { Instructor } from './instructor.entity';
import { CreateInstructorDto, UpdateInstructorDto } from './instructor.dto';
import { UserInformation } from '../user-information/user-information.entity';
export declare class InstructorService {
    private readonly instructorRepository;
    private readonly userInformationRepository;
    constructor(instructorRepository: Repository<Instructor>, userInformationRepository: Repository<UserInformation>);
    create(createInstructorDto: CreateInstructorDto): Promise<Instructor>;
    findAll(): Promise<Instructor[]>;
    findOne(id: number): Promise<Instructor>;
    update(id: number, updateInstructorDto: UpdateInstructorDto): Promise<void>;
    delete(id: number): Promise<void>;
}
