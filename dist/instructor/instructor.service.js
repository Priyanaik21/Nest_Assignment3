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
    constructor(instructorRepository, userInformationRepository) {
        this.instructorRepository = instructorRepository;
        this.userInformationRepository = userInformationRepository;
    }
    async create(createInstructorDto) {
        const userInformation = await this.userInformationRepository.findOneBy({
            userId: createInstructorDto.userInformationId,
        });
        if (!userInformation) {
            throw new Error('UserInformation not found');
        }
        const newInstructor = this.instructorRepository.create({
            userInformation,
        });
        return this.instructorRepository.save(newInstructor);
    }
    async findAll() {
        return this.instructorRepository.find({
            relations: ['userInformation'],
        });
    }
    async findOne(id) {
        return this.instructorRepository.findOne({
            where: { instructorId: id },
            relations: ['userInformation'],
        });
    }
    async update(id, updateInstructorDto) {
        const instructor = await this.instructorRepository.findOne({
            where: { instructorId: id },
            relations: ['userInformation'],
        });
        if (!instructor) {
            throw new Error('Instructor not found');
        }
        if (updateInstructorDto.userInformationId) {
            const userInformation = await this.userInformationRepository.findOneBy({
                userId: updateInstructorDto.userInformationId,
            });
            if (!userInformation) {
                throw new Error('UserInformation not found');
            }
            instructor.userInformation = userInformation;
        }
        await this.instructorRepository.save(instructor);
    }
    async delete(id) {
        const instructor = await this.instructorRepository.findOne({ where: { instructorId: id } });
        if (!instructor) {
            throw new Error('Instructor not found');
        }
        await this.instructorRepository.delete(id);
    }
};
exports.InstructorService = InstructorService;
exports.InstructorService = InstructorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instructor_entity_1.Instructor)),
    __param(1, (0, typeorm_1.InjectRepository)(user_information_entity_1.UserInformation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], InstructorService);
//# sourceMappingURL=instructor.service.js.map