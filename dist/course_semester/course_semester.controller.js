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
exports.CourseSemesterController = void 0;
const common_1 = require("@nestjs/common");
const course_semester_service_1 = require("./course_semester.service");
const course_semester_dto_1 = require("./course_semester.dto");
let CourseSemesterController = class CourseSemesterController {
    constructor(courseSemesterService) {
        this.courseSemesterService = courseSemesterService;
    }
    async create(createCourseSemesterDto) {
        return this.courseSemesterService.create(createCourseSemesterDto);
    }
    async findAll(query) {
        return this.courseSemesterService.findAll(query);
    }
    async findOne(id) {
        return this.courseSemesterService.findOne(id);
    }
    async update(id, updateCourseSemesterDto) {
        return this.courseSemesterService.update(id, updateCourseSemesterDto);
    }
    async delete(id) {
        return this.courseSemesterService.delete(id);
    }
};
exports.CourseSemesterController = CourseSemesterController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_semester_dto_1.CreateCourseSemesterDto]),
    __metadata("design:returntype", Promise)
], CourseSemesterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseSemesterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseSemesterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, course_semester_dto_1.UpdateCourseSemesterDto]),
    __metadata("design:returntype", Promise)
], CourseSemesterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseSemesterController.prototype, "delete", null);
exports.CourseSemesterController = CourseSemesterController = __decorate([
    (0, common_1.Controller)('course-semester'),
    __metadata("design:paramtypes", [course_semester_service_1.CourseSemesterService])
], CourseSemesterController);
//# sourceMappingURL=course_semester.controller.js.map