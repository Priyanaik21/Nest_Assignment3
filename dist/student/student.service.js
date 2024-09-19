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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./student.entity");
const user_information_entity_1 = require("../user-information/user-information.entity");
let StudentService = class StudentService {
    constructor(dataSource, studentRepository, userInformationRepository) {
        this.dataSource = dataSource;
        this.studentRepository = studentRepository;
        this.userInformationRepository = userInformationRepository;
    }
    async create(createStudentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userInformation = await queryRunner.manager.findOne(user_information_entity_1.UserInformation, {
                where: { userId: createStudentDto.userInformationId },
            });
            if (!userInformation) {
                throw new common_1.NotFoundException('UserInformation not found');
            }
            const newStudent = this.studentRepository.create({ userInformation });
            const savedStudent = await queryRunner.manager.save(student_entity_1.Student, newStudent);
            await queryRunner.commitTransaction();
            return savedStudent;
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
        return this.studentRepository.find({
            relations: ['userInformation'],
        });
    }
    async findOne(id) {
        const student = await this.studentRepository.findOne({
            where: { studentId: id },
            relations: ['userInformation'],
        });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        return student;
    }
    async update(id, updateStudentDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const student = await queryRunner.manager.findOne(student_entity_1.Student, {
                where: { studentId: id },
            });
            if (!student) {
                throw new common_1.NotFoundException('Student not found');
            }
            if (updateStudentDto.userInformationId) {
                const userInformation = await queryRunner.manager.findOne(user_information_entity_1.UserInformation, {
                    where: { userId: updateStudentDto.userInformationId },
                });
                if (!userInformation) {
                    throw new common_1.NotFoundException('UserInformation not found');
                }
                student.userInformation = userInformation;
            }
            await queryRunner.manager.save(student_entity_1.Student, student);
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
            const student = await queryRunner.manager.findOne(student_entity_1.Student, {
                where: { studentId: id },
            });
            if (!student) {
                throw new common_1.NotFoundException('Student not found');
            }
            await queryRunner.manager.delete(student_entity_1.Student, id);
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
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(2, (0, typeorm_1.InjectRepository)(user_information_entity_1.UserInformation)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map