"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_information_entity_1 = require("./user-information/user-information.entity");
const student_entity_1 = require("./student/student.entity");
const instructor_entity_1 = require("./instructor/instructor.entity");
const student_instructor_entity_1 = require("./student-instructor/student-instructor.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'collegedb',
    entities: [user_information_entity_1.UserInformation, student_entity_1.Student, instructor_entity_1.Instructor, student_instructor_entity_1.StudentInstructor,],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map