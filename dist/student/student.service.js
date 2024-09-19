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
    constructor(studentRepository, userInformationRepository) {
        this.studentRepository = studentRepository;
        this.userInformationRepository = userInformationRepository;
    }
    async create(createStudentDto) {
        const userInformation = await this.userInformationRepository.findOneBy({ userId: createStudentDto.userInformationId });
        if (!userInformation) {
            throw new Error('UserInformation not found');
        }
        const newStudent = this.studentRepository.create({ userInformation });
        return this.studentRepository.save(newStudent);
    }
    async findAll() {
        return this.studentRepository.find({
            relations: ['userInformation'],
        });
    }
    async findOne(id) {
        return this.studentRepository.findOne({
            where: { studentId: id },
            relations: ['userInformation'],
        });
    }
    async update(id, updateStudentDto) {
        const student = await this.studentRepository.findOneBy({ studentId: id });
        if (!student) {
            throw new Error('Student not found');
        }
        if (updateStudentDto.userInformationId) {
            const userInformation = await this.userInformationRepository.findOneBy({ userId: updateStudentDto.userInformationId });
            if (!userInformation) {
                throw new Error('UserInformation not found');
            }
            student.userInformation = userInformation;
        }
        await this.studentRepository.save(student);
    }
    async delete(id) {
        await this.studentRepository.delete(id);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(1, (0, typeorm_1.InjectRepository)(user_information_entity_1.UserInformation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map