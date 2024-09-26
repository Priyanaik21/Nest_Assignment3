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
exports.CourseDepartmentController = void 0;
const common_1 = require("@nestjs/common");
const course_department_service_1 = require("./course_department.service");
const course_department_dto_1 = require("./course_department.dto");
let CourseDepartmentController = class CourseDepartmentController {
    constructor(courseDepartmentService) {
        this.courseDepartmentService = courseDepartmentService;
    }
    async create(createCourseDepartmentDto) {
        return this.courseDepartmentService.create(createCourseDepartmentDto);
    }
    async findAll(query) {
        return this.courseDepartmentService.findAll(query);
    }
    async findOne(id) {
        return this.courseDepartmentService.findOne(id);
    }
    async update(id, updateCourseDepartmentDto) {
        return this.courseDepartmentService.update(id, updateCourseDepartmentDto);
    }
    async delete(id) {
        return this.courseDepartmentService.delete(id);
    }
};
exports.CourseDepartmentController = CourseDepartmentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_department_dto_1.CreateCourseDepartmentDto]),
    __metadata("design:returntype", Promise)
], CourseDepartmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseDepartmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseDepartmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, course_department_dto_1.UpdateCourseDepartmentDto]),
    __metadata("design:returntype", Promise)
], CourseDepartmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseDepartmentController.prototype, "delete", null);
exports.CourseDepartmentController = CourseDepartmentController = __decorate([
    (0, common_1.Controller)('course-department'),
    __metadata("design:paramtypes", [course_department_service_1.CourseDepartmentService])
], CourseDepartmentController);
//# sourceMappingURL=course_department.controller.js.map