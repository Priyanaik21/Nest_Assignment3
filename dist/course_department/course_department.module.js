"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_department_service_1 = require("./course_department.service");
const course_department_controller_1 = require("./course_department.controller");
const course_department_entity_1 = require("./course_department.entity");
const courses_entity_1 = require("../courses/courses.entity");
const department_entity_1 = require("../department/department.entity");
let CourseDepartmentModule = class CourseDepartmentModule {
};
exports.CourseDepartmentModule = CourseDepartmentModule;
exports.CourseDepartmentModule = CourseDepartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_department_entity_1.CourseDepartment, courses_entity_1.Course, department_entity_1.Department])],
        providers: [course_department_service_1.CourseDepartmentService],
        controllers: [course_department_controller_1.CourseDepartmentController],
    })
], CourseDepartmentModule);
//# sourceMappingURL=course_department.module.js.map