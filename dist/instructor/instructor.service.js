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
exports.InstructorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const instructor_entity_1 = require("./instructor.entity");
const user_information_entity_1 = require("../user-information/user-information.entity");
let InstructorService = class InstructorService {
    constructor(dataSource, instructorRepository, userInformationRepository) {
        this.dataSource = dataSource;
        this.instructorRepository = instructorRepository;
        this.userInformationRepository = userInformationRepository;
    }
    async create(createInstructorDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userInformation = await queryRunner.manager.findOne(user_information_entity_1.UserInformation, {
                where: { userId: createInstructorDto.userInformationId },
            });
            if (!userInformation) {
                throw new common_1.NotFoundException('UserInformation not found');
            }
            const newInstructor = this.instructorRepository.create({
                userInformation,
            });
            const savedInstructor = await queryRunner.manager.save(instructor_entity_1.Instructor, newInstructor);
            await queryRunner.commitTransaction();
            return savedInstructor;
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
        return this.instructorRepository.find({
            relations: ['userInformation'],
        });
    }
    async findOne(id) {
        const instructor = await this.instructorRepository.findOne({
            where: { instructorId: id },
            relations: ['userInformation'],
        });
        if (!instructor) {
            throw new common_1.NotFoundException('Instructor not found');
        }
        return instructor;
    }
    async update(id, updateInstructorDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const instructor = await queryRunner.manager.findOne(instructor_entity_1.Instructor, {
                where: { instructorId: id },
                relations: ['userInformation'],
            });
            if (!instructor) {
                throw new common_1.NotFoundException('Instructor not found');
            }
            if (updateInstructorDto.userInformationId) {
                const userInformation = await queryRunner.manager.findOne(user_information_entity_1.UserInformation, {
                    where: { userId: updateInstructorDto.userInformationId },
                });
                if (!userInformation) {
                    throw new common_1.NotFoundException('UserInformation not found');
                }
                instructor.userInformation = userInformation;
            }
            await queryRunner.manager.save(instructor_entity_1.Instructor, instructor);
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
            const instructor = await queryRunner.manager.findOne(instructor_entity_1.Instructor, {
                where: { instructorId: id },
            });
            if (!instructor) {
                throw new common_1.NotFoundException('Instructor not found');
            }
            await queryRunner.manager.delete(instructor_entity_1.Instructor, id);
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
exports.InstructorService = InstructorService;
exports.InstructorService = InstructorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(instructor_entity_1.Instructor)),
    __param(2, (0, typeorm_1.InjectRepository)(user_information_entity_1.UserInformation)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository])
], InstructorService);
//# sourceMappingURL=instructor.service.js.map