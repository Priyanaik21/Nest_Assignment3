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
exports.CourseDepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_department_entity_1 = require("./course_department.entity");
const courses_entity_1 = require("../courses/courses.entity");
const department_entity_1 = require("../department/department.entity");
const paginationSearchSort_1 = require("../utils/paginationSearchSort");
let CourseDepartmentService = class CourseDepartmentService {
    constructor(dataSource, courseDepartmentRepository, courseRepository, departmentRepository) {
        this.dataSource = dataSource;
        this.courseDepartmentRepository = courseDepartmentRepository;
        this.courseRepository = courseRepository;
        this.departmentRepository = departmentRepository;
    }
    async create(createCourseDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const course = await queryRunner.manager.findOne(courses_entity_1.Course, {
                where: { courseId: createCourseDepartmentDto.courseId },
            });
            const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                where: { departmentId: createCourseDepartmentDto.departmentId },
            });
            if (!course || !department) {
                throw new common_1.NotFoundException('Course or Department not found');
            }
            const newCourseDepartment = this.courseDepartmentRepository.create({
                course,
                department,
            });
            const savedCourseDepartment = await queryRunner.manager.save(course_department_entity_1.CourseDepartment, newCourseDepartment);
            await queryRunner.commitTransaction();
            return savedCourseDepartment;
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
        const searchFields = ['courseDepartmentId'];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.courseDepartmentRepository.find({
            skip,
            take,
            order,
            where: where || {},
            relations: ['course', 'department'],
        });
    }
    async findOne(id) {
        const courseDepartment = await this.courseDepartmentRepository.findOne({
            where: { courseDepartmentId: id },
            relations: ['course', 'department'],
        });
        if (!courseDepartment) {
            throw new common_1.NotFoundException('CourseDepartment not found');
        }
        return courseDepartment;
    }
    async update(id, updateCourseDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const courseDepartment = await queryRunner.manager.findOne(course_department_entity_1.CourseDepartment, {
                where: { courseDepartmentId: id },
                relations: ['course', 'department'],
            });
            if (!courseDepartment) {
                throw new common_1.NotFoundException('CourseDepartment not found');
            }
            if (updateCourseDepartmentDto.courseId) {
                const course = await queryRunner.manager.findOne(courses_entity_1.Course, {
                    where: { courseId: updateCourseDepartmentDto.courseId },
                });
                if (course) {
                    courseDepartment.course = course;
                }
            }
            if (updateCourseDepartmentDto.departmentId) {
                const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                    where: { departmentId: updateCourseDepartmentDto.departmentId },
                });
                if (department) {
                    courseDepartment.department = department;
                }
            }
            await queryRunner.manager.save(course_department_entity_1.CourseDepartment, courseDepartment);
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
            const result = await queryRunner.manager.delete(course_department_entity_1.CourseDepartment, id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException('CourseDepartment not found');
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
exports.CourseDepartmentService = CourseDepartmentService;
exports.CourseDepartmentService = CourseDepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(course_department_entity_1.CourseDepartment)),
    __param(2, (0, typeorm_1.InjectRepository)(courses_entity_1.Course)),
    __param(3, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CourseDepartmentService);
//# sourceMappingURL=course_department.service.js.map