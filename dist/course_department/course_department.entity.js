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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDepartment = void 0;
const typeorm_1 = require("typeorm");
const courses_entity_1 = require("../courses/courses.entity");
const department_entity_1 = require("../department/department.entity");
let CourseDepartment = class CourseDepartment {
};
exports.CourseDepartment = CourseDepartment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseDepartment.prototype, "courseDepartmentId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CourseDepartment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CourseDepartment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CourseDepartment.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], CourseDepartment.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], CourseDepartment.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => courses_entity_1.Course, course => course.courseId, { onDelete: 'CASCADE' }),
    __metadata("design:type", courses_entity_1.Course)
], CourseDepartment.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, department => department.departmentId, { onDelete: 'CASCADE' }),
    __metadata("design:type", department_entity_1.Department)
], CourseDepartment.prototype, "department", void 0);
exports.CourseDepartment = CourseDepartment = __decorate([
    (0, typeorm_1.Entity)()
], CourseDepartment);
//# sourceMappingURL=course_department.entity.js.map