import { DataSource, Repository } from 'typeorm';
import { Course } from './courses.entity';
import { CreateCourseDto, UpdateCourseDto } from './courses.dto';
export declare class CourseService {
    private readonly courseRepository;
    private readonly dataSource;
    constructor(courseRepository: Repository<Course>, dataSource: DataSource);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(queryParams: any): Promise<Course[]>;
    findOne(id: number): Promise<Course>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<void>;
    delete(id: number): Promise<void>;
}
