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
exports.Department = void 0;
const typeorm_1 = require("typeorm");
const instructor_department_entity_1 = require("../instructor_department/instructor_department.entity");
const student_department_entity_1 = require("../student_department/student_department.entity");
const course_department_entity_1 = require("../course_department/course_department.entity");
let Department = class Department {
};
exports.Department = Department;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Department.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Department.prototype, "departmentName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Department.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Department.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Department.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => instructor_department_entity_1.InstructorDepartment, instructorDepartment => instructorDepartment.department),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Department.prototype, "instructorDepartments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_department_entity_1.StudentDepartment, studentDepartment => studentDepartment.department),
    __metadata("design:type", Array)
], Department.prototype, "studentDepartments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_department_entity_1.CourseDepartment, courseDepartment => courseDepartment.department),
    __metadata("design:type", Array)
], Department.prototype, "courseDepartments", void 0);
exports.Department = Department = __decorate([
    (0, typeorm_1.Entity)()
], Department);
//# sourceMappingURL=department.entity.js.map