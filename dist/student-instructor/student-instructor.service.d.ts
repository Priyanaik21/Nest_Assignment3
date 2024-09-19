import { Repository } from 'typeorm';
import { StudentInstructor } from './student-instructor.entity';
import { CreateStudentInstructorDto, UpdateStudentInstructorDto } from './student-instructor.dto';
import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';
export declare class StudentInstructorService {
    private readonly studentInstructorRepository;
    private readonly studentRepository;
    private readonly instructorRepository;
    constructor(studentInstructorRepository: Repository<StudentInstructor>, studentRepository: Repository<Student>, instructorRepository: Repository<Instructor>);
    create(createStudentInstructorDto: CreateStudentInstructorDto): Promise<StudentInstructor>;
    findAll(): Promise<StudentInstructor[]>;
    findOne(id: number): Promise<StudentInstructor>;
    update(id: number, updateStudentInstructorDto: UpdateStudentInstructorDto): Promise<void>;
    delete(id: number): Promise<void>;
}
