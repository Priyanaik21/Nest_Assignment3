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
exports.StudentInstructorController = void 0;
const common_1 = require("@nestjs/common");
const student_instructor_service_1 = require("./student-instructor.service");
const student_instructor_dto_1 = require("./student-instructor.dto");
let StudentInstructorController = class StudentInstructorController {
    constructor(studentInstructorService) {
        this.studentInstructorService = studentInstructorService;
    }
    async create(createStudentInstructorDto) {
        return this.studentInstructorService.create(createStudentInstructorDto);
    }
    async findAll() {
        return this.studentInstructorService.findAll();
    }
    async findOne(id) {
        return this.studentInstructorService.findOne(id);
    }
    async update(id, updateStudentInstructorDto) {
        return this.studentInstructorService.update(id, updateStudentInstructorDto);
    }
    async delete(id) {
        return this.studentInstructorService.delete(id);
    }
};
exports.StudentInstructorController = StudentInstructorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_instructor_dto_1.CreateStudentInstructorDto]),
    __metadata("design:returntype", Promise)
], StudentInstructorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentInstructorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentInstructorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, student_instructor_dto_1.UpdateStudentInstructorDto]),
    __metadata("design:returntype", Promise)
], StudentInstructorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentInstructorController.prototype, "delete", null);
exports.StudentInstructorController = StudentInstructorController = __decorate([
    (0, common_1.Controller)('student-instructor'),
    __metadata("design:paramtypes", [student_instructor_service_1.StudentInstructorService])
], StudentInstructorController);
//# sourceMappingURL=student-instructor.controller.js.map