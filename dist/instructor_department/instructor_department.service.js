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
exports.InstructorDepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const instructor_department_entity_1 = require("./instructor_department.entity");
const instructor_entity_1 = require("../instructor/instructor.entity");
const department_entity_1 = require("../department/department.entity");
const paginationSearchSort_1 = require("../utils/paginationSearchSort");
let InstructorDepartmentService = class InstructorDepartmentService {
    constructor(dataSource, instructorDepartmentRepository, instructorRepository, departmentRepository) {
        this.dataSource = dataSource;
        this.instructorDepartmentRepository = instructorDepartmentRepository;
        this.instructorRepository = instructorRepository;
        this.departmentRepository = departmentRepository;
    }
    async create(createInstructorDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const instructor = await queryRunner.manager.findOne(instructor_entity_1.Instructor, {
                where: { instructorId: createInstructorDepartmentDto.instructorId },
            });
            const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                where: { departmentId: createInstructorDepartmentDto.departmentId },
            });
            if (!instructor || !department) {
                throw new common_1.NotFoundException('Instructor or Department not found');
            }
            const newInstructorDepartment = this.instructorDepartmentRepository.create({
                instructor,
                department,
            });
            const savedInstructorDepartment = await queryRunner.manager.save(instructor_department_entity_1.InstructorDepartment, newInstructorDepartment);
            await queryRunner.commitTransaction();
            return savedInstructorDepartment;
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
        const searchFields = ['instructorDepartmentId'];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.instructorDepartmentRepository.find({
            skip,
            take,
            order,
            where: where || {},
            relations: ['instructor', 'department'],
        });
    }
    async findAllDetails(queryParams) {
        const searchFields = ['instructorDepartmentId'];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.instructorDepartmentRepository.find({
            skip,
            take,
            order,
            where: where || {},
            relations: ['instructor', 'department'],
        });
    }
    async findOne(id) {
        const instructorDepartment = await this.instructorDepartmentRepository.findOne({
            where: { instructorDepartmentId: id },
            relations: ['instructor', 'department'],
        });
        if (!instructorDepartment) {
            throw new common_1.NotFoundException('InstructorDepartment not found');
        }
        return instructorDepartment;
    }
    async update(id, updateInstructorDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const instructorDepartment = await queryRunner.manager.findOne(instructor_department_entity_1.InstructorDepartment, {
                where: { instructorDepartmentId: id },
                relations: ['instructor', 'department'],
            });
            if (!instructorDepartment) {
                throw new common_1.NotFoundException('InstructorDepartment not found');
            }
            if (updateInstructorDepartmentDto.instructorId) {
                const instructor = await queryRunner.manager.findOne(instructor_entity_1.Instructor, {
                    where: { instructorId: updateInstructorDepartmentDto.instructorId },
                });
                if (instructor) {
                    instructorDepartment.instructor = instructor;
                }
            }
            if (updateInstructorDepartmentDto.departmentId) {
                const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                    where: { departmentId: updateInstructorDepartmentDto.departmentId },
                });
                if (department) {
                    instructorDepartment.department = department;
                }
            }
            await queryRunner.manager.save(instructor_department_entity_1.InstructorDepartment, instructorDepartment);
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
            const result = await queryRunner.manager.delete(instructor_department_entity_1.InstructorDepartment, id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException('InstructorDepartment not found');
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
exports.InstructorDepartmentService = InstructorDepartmentService;
exports.InstructorDepartmentService = InstructorDepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(instructor_department_entity_1.InstructorDepartment)),
    __param(2, (0, typeorm_1.InjectRepository)(instructor_entity_1.Instructor)),
    __param(3, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], InstructorDepartmentService);
//# sourceMappingURL=instructor_department.service.js.map