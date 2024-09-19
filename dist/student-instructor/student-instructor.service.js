"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInstructorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_instructor_entity_1 = require("./student-instructor.entity");
const student_entity_1 = require("../student/student.entity");
const instructor_entity_1 = require("../instructor/instructor.entity");
let StudentInstructorService = class StudentInstructorService {
    constructor(studentInstructorRepository, studentRepository, instructorRepository) {
        this.studentInstructorRepository = studentInstructorRepository;
        this.studentRepository = studentRepository;
        this.instructorRepository = instructorRepository;
    }
    async create(createStudentInstructorDto) {
        const student = await this.studentRepository.findOneBy({ studentId: createStudentInstructorDto.studentId });
        const instructor = await this.instructorRepository.findOneBy({ instructorId: createStudentInstructorDto.instructorId });
        if (!student || !instructor) {
            throw new common_1.NotFoundException('Student or Instructor not found');
        }
        const newStudentInstructor = this.studentInstructorRepository.create({
            student,
            instructor,
        });
        return this.studentInstructorRepository.save(newStudentInstructor);
    }
    async findAll() {
        return this.studentInstructorRepository.find({
            relations: ['student', 'instructor'],
        });
    }
    async findOne(id) {
        const studentInstructor = await this.studentInstructorRepository.findOne({
            where: { studentInstructorId: id },
            relations: ['student', 'instructor'],
        });
        if (!studentInstructor) {
            throw new common_1.NotFoundException('StudentInstructor not found');
        }
        return studentInstructor;
    }
    async update(id, updateStudentInstructorDto) {
        const studentInstructor = await this.studentInstructorRepository.findOneBy({ studentInstructorId: id });
        if (!studentInstructor) {
            throw new common_1.NotFoundException('StudentInstructor not found');
        }
        if (updateStudentInstructorDto.studentId) {
            const student = await this.studentRepository.findOneBy({ studentId: updateStudentInstructorDto.studentId });
            if (student) {
                studentInstructor.student = student;
            }
        }
        if (updateStudentInstructorDto.instructorId) {
            const instructor = await this.instructorRepository.findOneBy({ instructorId: updateStudentInstructorDto.instructorId });
            if (instructor) {
                studentInstructor.instructor = instructor;
            }
        }
        await this.studentInstructorRepository.save(studentInstructor);
    }
    async delete(id) {
        const result = await this.studentInstructorRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('StudentInstructor not found');
        }
    }
};
exports.StudentInstructorService = StudentInstructorService;
exports.StudentInstructorService = StudentInstructorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_instructor_entity_1.StudentInstructor)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(2, (0, typeorm_1.InjectRepository)(instructor_entity_1.Instructor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentInstructorService);
//# sourceMappingURL=student-instructor.service.js.map