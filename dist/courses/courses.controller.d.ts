import { CourseService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto } from './courses.dto';
import { Course } from './courses.entity';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(query: any): Promise<Course[]>;
    findOne(id: number): Promise<Course>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<void>;
    delete(id: number): Promise<void>;
}
