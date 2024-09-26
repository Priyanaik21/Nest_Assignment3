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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const courses_entity_1 = require("./courses.entity");
const paginationSearchSort_1 = require("../utils/paginationSearchSort");
let CourseService = class CourseService {
    constructor(courseRepository, dataSource) {
        this.courseRepository = courseRepository;
        this.dataSource = dataSource;
    }
    async create(createCourseDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const newCourse = this.courseRepository.create(createCourseDto);
            const savedCourse = await queryRunner.manager.save(courses_entity_1.Course, newCourse);
            await queryRunner.commitTransaction();
            return savedCourse;
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
        const searchFields = ['courseName',];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.courseRepository.find({
            skip,
            take,
            order,
            where: where || {},
            relations: ['courseDepartments']
        });
    }
    async findOne(id) {
        const course = await this.courseRepository.findOne({
            where: { courseId: id },
            relations: ['courseDepartments'],
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return course;
    }
    async update(id, updateCourseDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const course = await queryRunner.manager.findOne(courses_entity_1.Course, {
                where: { courseId: id },
                relations: ['courseDepartments'],
            });
            if (!course) {
                throw new common_1.NotFoundException('Course not found');
            }
            Object.assign(course, updateCourseDto);
            await queryRunner.manager.save(courses_entity_1.Course, course);
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
            const course = await queryRunner.manager.findOne(courses_entity_1.Course, {
                where: { courseId: id },
            });
            if (!course) {
                throw new common_1.NotFoundException('Course not found');
            }
            await queryRunner.manager.delete(courses_entity_1.Course, id);
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
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(courses_entity_1.Course)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], CourseService);
//# sourceMappingURL=courses.service.js.map