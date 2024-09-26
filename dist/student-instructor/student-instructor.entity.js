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
exports.StudentInstructor = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../student/student.entity");
const instructor_entity_1 = require("../instructor/instructor.entity");
let StudentInstructor = class StudentInstructor {
};
exports.StudentInstructor = StudentInstructor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentInstructor.prototype, "studentInstructorId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], StudentInstructor.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], StudentInstructor.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], StudentInstructor.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], StudentInstructor.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], StudentInstructor.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.studentId, { onDelete: 'CASCADE' }),
    __metadata("design:type", student_entity_1.Student)
], StudentInstructor.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => instructor_entity_1.Instructor, instructor => instructor.instructorId, { onDelete: 'CASCADE' }),
    __metadata("design:type", instructor_entity_1.Instructor)
], StudentInstructor.prototype, "instructor", void 0);
exports.StudentInstructor = StudentInstructor = __decorate([
    (0, typeorm_1.Entity)()
], StudentInstructor);
//# sourceMappingURL=student-instructor.entity.js.map