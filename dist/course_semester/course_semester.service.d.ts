import { DataSource, Repository } from 'typeorm';
import { CourseSemester } from './course_semester.entity';
import { CreateCourseSemesterDto, UpdateCourseSemesterDto } from './course_semester.dto';
import { Course } from '../courses/courses.entity';
import { Semester } from '../semester/semester.entity';
export declare class CourseSemesterService {
    private readonly dataSource;
    private readonly courseSemesterRepository;
    private readonly courseRepository;
    private readonly semesterRepository;
    constructor(dataSource: DataSource, courseSemesterRepository: Repository<CourseSemester>, courseRepository: Repository<Course>, semesterRepository: Repository<Semester>);
    create(createCourseSemesterDto: CreateCourseSemesterDto): Promise<CourseSemester>;
    findAll(queryParams: any): Promise<CourseSemester[]>;
    findOne(id: number): Promise<CourseSemester>;
    update(id: number, updateCourseSemesterDto: UpdateCourseSemesterDto): Promise<void>;
    delete(id: number): Promise<void>;
}
