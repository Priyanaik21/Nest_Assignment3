import { CourseSemesterService } from './course_semester.service';
import { CreateCourseSemesterDto, UpdateCourseSemesterDto } from './course_semester.dto';
import { CourseSemester } from './course_semester.entity';
export declare class CourseSemesterController {
    private readonly courseSemesterService;
    constructor(courseSemesterService: CourseSemesterService);
    create(createCourseSemesterDto: CreateCourseSemesterDto): Promise<CourseSemester>;
    findAll(query: any): Promise<CourseSemester[]>;
    findOne(id: number): Promise<CourseSemester>;
    update(id: number, updateCourseSemesterDto: UpdateCourseSemesterDto): Promise<void>;
    delete(id: number): Promise<void>;
}
