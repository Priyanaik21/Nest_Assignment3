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
                entities: [user_information_entity_1.UserInformation, student_entity_1.Student, instructor_entity_1.Instructor, student_instructor_entity_1.StudentInstructor],
                synchronize: true,
                logging: true,
            }),
            user_information_module_1.UserInformationModule,
            student_module_1.StudentModule,
            instructor_module_1.InstructorModule,
            student_instructor_module_1.StudentInstructorModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map