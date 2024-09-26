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
exports.StudentDepartmentController = void 0;
const common_1 = require("@nestjs/common");
const student_department_service_1 = require("./student_department.service");
const student_department_dto_1 = require("./student_department.dto");
let StudentDepartmentController = class StudentDepartmentController {
    constructor(studentDepartmentService) {
        this.studentDepartmentService = studentDepartmentService;
    }
    async create(createStudentDepartmentDto) {
        return this.studentDepartmentService.create(createStudentDepartmentDto);
    }
    async findAll() {
        return this.studentDepartmentService.findAll();
    }
    async findOne(id) {
        return this.studentDepartmentService.findOne(id);
    }
    async update(id, updateStudentDepartmentDto) {
        return this.studentDepartmentService.update(id, updateStudentDepartmentDto);
    }
    async delete(id) {
        return this.studentDepartmentService.delete(id);
    }
};
exports.StudentDepartmentController = StudentDepartmentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_department_dto_1.CreateStudentDepartmentDto]),
    __metadata("design:returntype", Promise)
], StudentDepartmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentDepartmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentDepartmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, student_department_dto_1.UpdateStudentDepartmentDto]),
    __metadata("design:returntype", Promise)
], StudentDepartmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentDepartmentController.prototype, "delete", null);
exports.StudentDepartmentController = StudentDepartmentController = __decorate([
    (0, common_1.Controller)('student-department'),
    __metadata("design:paramtypes", [student_department_service_1.StudentDepartmentService])
], StudentDepartmentController);
//# sourceMappingURL=student_department.controller.js.map