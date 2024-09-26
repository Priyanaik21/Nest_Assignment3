"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorDepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const instructor_department_service_1 = require("./instructor_department.service");
const instructor_department_controller_1 = require("./instructor_department.controller");
const instructor_department_entity_1 = require("./instructor_department.entity");
const instructor_entity_1 = require("../instructor/instructor.entity");
const department_entity_1 = require("../department/department.entity");
let InstructorDepartmentModule = class InstructorDepartmentModule {
};
exports.InstructorDepartmentModule = InstructorDepartmentModule;
exports.InstructorDepartmentModule = InstructorDepartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([instructor_department_entity_1.InstructorDepartment, instructor_entity_1.Instructor, department_entity_1.Department])],
        providers: [instructor_department_service_1.InstructorDepartmentService],
        controllers: [instructor_department_controller_1.InstructorDepartmentController],
    })
], InstructorDepartmentModule);
//# sourceMappingURL=instructor_department.module.js.map