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
exports.CourseSemesterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_semester_entity_1 = require("./course_semester.entity");
const courses_entity_1 = require("../courses/courses.entity");
const semester_entity_1 = require("../semester/semester.entity");
const paginationSearchSort_1 = require("../utils/paginationSearchSort");
let CourseSemesterService = class CourseSemesterService {
    constructor(dataSource, courseSemesterRepository, courseRepository, semesterRepository) {
        this.dataSource = dataSource;
        this.courseSemesterRepository = courseSemesterRepository;
        this.courseRepository = courseRepository;
        this.semesterRepository = semesterRepository;
    }
    async create(createCourseSemesterDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const course = await queryRunner.manager.findOne(courses_entity_1.Course, {
                where: { courseId: createCourseSemesterDto.courseId },
            });
            const semester = await queryRunner.manager.findOne(semester_entity_1.Semester, {
                where: { semesterId: createCourseSemesterDto.semesterId },
            });
            if (!course || !semester) {
                throw new common_1.NotFoundException('Course or Semester not found');
            }
            const newCourseSemester = this.courseSemesterRepository.create({
                course,
                semester,
            });
            const savedCourseSemester = await queryRunner.manager.save(course_semester_entity_1.CourseSemester, newCourseSemester);
            await queryRunner.commitTransaction();
            return savedCourseSemester;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll(queryParams) {
        const searchFields = ['courseSemesterId'];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.courseSemesterRepository.find({
            skip,
            take,
            order,
            where: where || {},
            relations: ['course', 'semester'],
        });
    }
    async findOne(id) {
        const courseSemester = await this.courseSemesterRepository.findOne({
            where: { courseSemesterId: id },
            relations: ['course', 'semester'],
        });
        if (!courseSemester) {
            throw new common_1.NotFoundException('CourseSemester not found');
        }
        return courseSemester;
    }
    async update(id, updateCourseSemesterDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const courseSemester = await queryRunner.manager.findOne(course_semester_entity_1.CourseSemester, {
                where: { courseSemesterId: id },
                relations: ['course', 'semester'],
            });
            if (!courseSemester) {
                throw new common_1.NotFoundException('CourseSemester not found');
            }
            if (updateCourseSemesterDto.courseId) {
                const course = await queryRunner.manager.findOne(courses_entity_1.Course, {
                    where: { courseId: updateCourseSemesterDto.courseId },
                });
                if (course) {
                    courseSemester.course = course;
                }
            }
            if (updateCourseSemesterDto.semesterId) {
                const semester = await queryRunner.manager.findOne(semester_entity_1.Semester, {
                    where: { semesterId: updateCourseSemesterDto.semesterId },
                });
                if (semester) {
                    courseSemester.semester = semester;
                }
            }
            await queryRunner.manager.save(course_semester_entity_1.CourseSemester, courseSemester);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async delete(id) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const result = await queryRunner.manager.delete(course_semester_entity_1.CourseSemester, id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException('CourseSemester not found');
            }
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.CourseSemesterService = CourseSemesterService;
exports.CourseSemesterService = CourseSemesterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(course_semester_entity_1.CourseSemester)),
    __param(2, (0, typeorm_1.InjectRepository)(courses_entity_1.Course)),
    __param(3, (0, typeorm_1.InjectRepository)(semester_entity_1.Semester)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CourseSemesterService);
//# sourceMappingURL=course_semester.service.js.map