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
exports.InstructorController = void 0;
const common_1 = require("@nestjs/common");
const instructor_service_1 = require("./instructor.service");
const instructor_dto_1 = require("./instructor.dto");
let InstructorController = class InstructorController {
    constructor(instructorService) {
        this.instructorService = instructorService;
    }
    async create(createInstructorDto) {
        return this.instructorService.create(createInstructorDto);
    }
    async findAll(query) {
        return this.instructorService.findAll(query);
    }
    async findOne(id) {
        return this.instructorService.findOne(id);
    }
    async update(id, updateInstructorDto) {
        return this.instructorService.update(id, updateInstructorDto);
    }
    async delete(id) {
        return this.instructorService.delete(id);
    }
};
exports.InstructorController = InstructorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instructor_dto_1.CreateInstructorDto]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, instructor_dto_1.UpdateInstructorDto]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "delete", null);
exports.InstructorController = InstructorController = __decorate([
    (0, common_1.Controller)('instructors'),
    __metadata("design:paramtypes", [instructor_service_1.InstructorService])
], InstructorController);
//# sourceMappingURL=instructor.controller.js.map