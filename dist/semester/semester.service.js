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
exports.SemesterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const semester_entity_1 = require("./semester.entity");
const paginationSearchSort_1 = require("../utils/paginationSearchSort");
let SemesterService = class SemesterService {
    constructor(semesterRepository, dataSource) {
        this.semesterRepository = semesterRepository;
        this.dataSource = dataSource;
    }
    async create(createSemesterDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const newSemester = this.semesterRepository.create(createSemesterDto);
            const savedSemester = await queryRunner.manager.save(semester_entity_1.Semester, newSemester);
            await queryRunner.commitTransaction();
            return savedSemester;
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
        const searchFields = ['semesterName', 'semesterId'];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.semesterRepository.find({
            skip,
            take,
            order,
            where: where || {},
        });
    }
    async findOne(id) {
        const semester = await this.semesterRepository.findOne({
            where: { semesterId: id },
        });
        if (!semester) {
            throw new common_1.NotFoundException('Semester not found');
        }
        return semester;
    }
    async update(id, updateSemesterDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const semester = await queryRunner.manager.findOne(semester_entity_1.Semester, {
                where: { semesterId: id },
            });
            if (!semester) {
                throw new common_1.NotFoundException('Semester not found');
            }
            Object.assign(semester, updateSemesterDto);
            const updatedSemester = await queryRunner.manager.save(semester_entity_1.Semester, semester);
            await queryRunner.commitTransaction();
            return updatedSemester;
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
            const semester = await queryRunner.manager.findOne(semester_entity_1.Semester, {
                where: { semesterId: id },
            });
            if (!semester) {
                throw new common_1.NotFoundException('Semester not found');
            }
            await queryRunner.manager.delete(semester_entity_1.Semester, id);
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
exports.SemesterService = SemesterService;
exports.SemesterService = SemesterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(semester_entity_1.Semester)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], SemesterService);
//# sourceMappingURL=semester.service.js.map