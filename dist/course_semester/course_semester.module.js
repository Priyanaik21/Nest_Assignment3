"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSemesterModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_semester_service_1 = require("./course_semester.service");
const course_semester_controller_1 = require("./course_semester.controller");
const course_semester_entity_1 = require("./course_semester.entity");
const courses_entity_1 = require("../courses/courses.entity");
const semester_entity_1 = require("../semester/semester.entity");
let CourseSemesterModule = class CourseSemesterModule {
};
exports.CourseSemesterModule = CourseSemesterModule;
exports.CourseSemesterModule = CourseSemesterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_semester_entity_1.CourseSemester, courses_entity_1.Course, semester_entity_1.Semester])],
        providers: [course_semester_service_1.CourseSemesterService],
        controllers: [course_semester_controller_1.CourseSemesterController],
    })
], CourseSemesterModule);
//# sourceMappingURL=course_semester.module.js.map