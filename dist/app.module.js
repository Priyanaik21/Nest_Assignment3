"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_information_module_1 = require("./user-information/user-information.module");
const student_module_1 = require("./student/student.module");
const instructor_module_1 = require("./instructor/instructor.module");
const student_instructor_module_1 = require("./student-instructor/student-instructor.module");
const user_information_entity_1 = require("./user-information/user-information.entity");
const student_entity_1 = require("./student/student.entity");
const instructor_entity_1 = require("./instructor/instructor.entity");
const student_instructor_entity_1 = require("./student-instructor/student-instructor.entity");
const department_module_1 = require("./department/department.module");
const courses_module_1 = require("./courses/courses.module");
const course_department_entity_1 = require("./course_department/course_department.entity");
const instructor_department_entity_1 = require("./instructor_department/instructor_department.entity");
const student_department_entity_1 = require("./student_department/student_department.entity");
const course_department_module_1 = require("./course_department/course_department.module");
const instructor_department_module_1 = require("./instructor_department/instructor_department.module");
const student_department_module_1 = require("./student_department/student_department.module");
const department_entity_1 = require("./department/department.entity");
const courses_entity_1 = require("./courses/courses.entity");
const semester_module_1 = require("./semester/semester.module");
const course_semester_module_1 = require("./course_semester/course_semester.module");
const semester_entity_1 = require("./semester/semester.entity");
const course_semester_entity_1 = require("./course_semester/course_semester.entity");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'collegedb',
                entities: [user_information_entity_1.UserInformation, student_entity_1.Student, instructor_entity_1.Instructor, student_instructor_entity_1.StudentInstructor, department_entity_1.Department, student_department_entity_1.StudentDepartment, instructor_department_entity_1.InstructorDepartment, course_department_entity_1.CourseDepartment, courses_entity_1.Course, semester_entity_1.Semester, course_semester_entity_1.CourseSemester],
                synchronize: true,
                logging: true,
            }),
            user_information_module_1.UserInformationModule,
            student_module_1.StudentModule,
            instructor_module_1.InstructorModule,
            student_instructor_module_1.StudentInstructorModule,
            department_module_1.DepartmentModule,
            courses_module_1.CourseModule,
            course_department_module_1.CourseDepartmentModule,
            instructor_department_module_1.InstructorDepartmentModule,
            student_department_module_1.StudentDepartmentModule,
            semester_module_1.SemesterModule,
            course_semester_module_1.CourseSemesterModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map