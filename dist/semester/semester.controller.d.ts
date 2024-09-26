import { SemesterService } from './semester.service';
import { CreateSemesterDto, UpdateSemesterDto } from './semester.dto';
import { Semester } from './semester.entity';
export declare class SemesterController {
    private readonly semesterService;
    constructor(semesterService: SemesterService);
    create(createSemesterDto: CreateSemesterDto): Promise<Semester>;
    findAll(query: any): Promise<Semester[]>;
    findOne(id: number): Promise<Semester>;
    update(id: number, updateSemesterDto: UpdateSemesterDto): Promise<Semester>;
    delete(id: number): Promise<void>;
}
