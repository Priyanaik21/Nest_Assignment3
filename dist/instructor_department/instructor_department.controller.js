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
exports.InstructorDepartmentController = void 0;
const common_1 = require("@nestjs/common");
const instructor_department_service_1 = require("./instructor_department.service");
const instructor_department_dto_1 = require("./instructor_department.dto");
let InstructorDepartmentController = class InstructorDepartmentController {
    constructor(instructorDepartmentService) {
        this.instructorDepartmentService = instructorDepartmentService;
    }
    async create(createInstructorDepartmentDto) {
        return this.instructorDepartmentService.create(createInstructorDepartmentDto);
    }
    async findAll(query) {
        return this.instructorDepartmentService.findAll(query);
    }
    async findAllDetails(query) {
        return this.instructorDepartmentService.findAllDetails(query);
    }
    async findOne(id) {
        return this.instructorDepartmentService.findOne(id);
    }
    async update(id, updateInstructorDepartmentDto) {
        return this.instructorDepartmentService.update(id, updateInstructorDepartmentDto);
    }
    async delete(id) {
        return this.instructorDepartmentService.delete(id);
    }
};
exports.InstructorDepartmentController = InstructorDepartmentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instructor_department_dto_1.CreateInstructorDepartmentDto]),
    __metadata("design:returntype", Promise)
], InstructorDepartmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstructorDepartmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/departments'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstructorDepartmentController.prototype, "findAllDetails", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstructorDepartmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, instructor_department_dto_1.UpdateInstructorDepartmentDto]),
    __metadata("design:returntype", Promise)
], InstructorDepartmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstructorDepartmentController.prototype, "delete", null);
exports.InstructorDepartmentController = InstructorDepartmentController = __decorate([
    (0, common_1.Controller)('instructor-department'),
    __metadata("design:paramtypes", [instructor_department_service_1.InstructorDepartmentService])
], InstructorDepartmentController);
//# sourceMappingURL=instructor_department.controller.js.map