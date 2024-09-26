import { DataSource, Repository } from 'typeorm';
import { Semester } from './semester.entity';
import { CreateSemesterDto, UpdateSemesterDto } from './semester.dto';
export declare class SemesterService {
    private readonly semesterRepository;
    private readonly dataSource;
    constructor(semesterRepository: Repository<Semester>, dataSource: DataSource);
    create(createSemesterDto: CreateSemesterDto): Promise<Semester>;
    findAll(queryParams: any): Promise<Semester[]>;
    findOne(id: number): Promise<Semester>;
    update(id: number, updateSemesterDto: UpdateSemesterDto): Promise<Semester>;
    delete(id: number): Promise<void>;
}
