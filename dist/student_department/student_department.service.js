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
exports.StudentDepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_department_entity_1 = require("./student_department.entity");
const student_entity_1 = require("../student/student.entity");
const department_entity_1 = require("../department/department.entity");
let StudentDepartmentService = class StudentDepartmentService {
    constructor(dataSource, studentDepartmentRepository, studentRepository, departmentRepository) {
        this.dataSource = dataSource;
        this.studentDepartmentRepository = studentDepartmentRepository;
        this.studentRepository = studentRepository;
        this.departmentRepository = departmentRepository;
    }
    async create(createStudentDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const student = await queryRunner.manager.findOne(student_entity_1.Student, {
                where: { studentId: createStudentDepartmentDto.studentId },
            });
            const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                where: { departmentId: createStudentDepartmentDto.departmentId },
            });
            if (!student || !department) {
                throw new common_1.NotFoundException('Student or Department not found');
            }
            const newStudentDepartment = this.studentDepartmentRepository.create({
                student,
                department,
            });
            const savedStudentDepartment = await queryRunner.manager.save(student_department_entity_1.StudentDepartment, newStudentDepartment);
            await queryRunner.commitTransaction();
            return savedStudentDepartment;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        return this.studentDepartmentRepository.find({
            relations: ['student', 'department'],
        });
    }
    async findOne(id) {
        const studentDepartment = await this.studentDepartmentRepository.findOne({
            where: { studentDepartmentId: id },
            relations: ['student', 'department'],
        });
        if (!studentDepartment) {
            throw new common_1.NotFoundException('StudentDepartment not found');
        }
        return studentDepartment;
    }
    async update(id, updateStudentDepartmentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const studentDepartment = await queryRunner.manager.findOne(student_department_entity_1.StudentDepartment, {
                where: { studentDepartmentId: id },
                relations: ['student', 'department'],
            });
            if (!studentDepartment) {
                throw new common_1.NotFoundException('StudentDepartment not found');
            }
            if (updateStudentDepartmentDto.studentId) {
                const student = await queryRunner.manager.findOne(student_entity_1.Student, {
                    where: { studentId: updateStudentDepartmentDto.studentId },
                });
                if (student) {
                    studentDepartment.student = student;
                }
            }
            if (updateStudentDepartmentDto.departmentId) {
                const department = await queryRunner.manager.findOne(department_entity_1.Department, {
                    where: { departmentId: updateStudentDepartmentDto.departmentId },
                });
                if (department) {
                    studentDepartment.department = department;
                }
            }
            await queryRunner.manager.save(student_department_entity_1.StudentDepartment, studentDepartment);
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
            const result = await queryRunner.manager.delete(student_department_entity_1.StudentDepartment, id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException('StudentDepartment not found');
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
exports.StudentDepartmentService = StudentDepartmentService;
exports.StudentDepartmentService = StudentDepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(student_department_entity_1.StudentDepartment)),
    __param(2, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(3, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentDepartmentService);
//# sourceMappingURL=student_department.service.js.map