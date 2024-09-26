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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const department_entity_1 = require("./department.entity");
const paginationSearchSort_1 = require("../utils/paginationSearchSort");
let DepartmentService = class DepartmentService {
    constructor(departmentRepository, dataSource) {
        this.departmentRepository = departmentRepository;
        this.dataSource = dataSource;
    }
    async create(createDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const newDepartment = this.departmentRepository.create(createDepartmentDto);
            const savedDepartment = await queryRunner.manager.save(department_entity_1.Department, newDepartment);
            await queryRunner.commitTransaction();
            return savedDepartment;
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
        const searchFields = ['departmentName', 'departmentId'];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.departmentRepository.find({
            skip,
            take,
            order,
            where: where || {},
        });
    }
    async findOne(id) {
        const department = await this.departmentRepository.findOneBy({ departmentId: id });
        if (!department) {
            throw new common_1.NotFoundException('Department not found');
        }
        return department;
    }
    async update(id, updateDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                where: { departmentId: id },
            });
            if (!department) {
                throw new common_1.NotFoundException('Department not found');
            }
            Object.assign(department, updateDepartmentDto);
            await queryRunner.manager.save(department_entity_1.Department, department);
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
            const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                where: { departmentId: id },
            });
            if (!department) {
                throw new common_1.NotFoundException('Department not found');
            }
            await queryRunner.manager.delete(department_entity_1.Department, id);
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
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DepartmentService);
//# sourceMappingURL=department.service.js.map