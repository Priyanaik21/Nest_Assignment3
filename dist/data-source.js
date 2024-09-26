"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_information_entity_1 = require("./user-information/user-information.entity");
const student_entity_1 = require("./student/student.entity");
const instructor_entity_1 = require("./instructor/instructor.entity");
const student_instructor_entity_1 = require("./student-instructor/student-instructor.entity");
const courses_entity_1 = require("./courses/courses.entity");
const course_department_entity_1 = require("./course_department/course_department.entity");
const department_entity_1 = require("./department/department.entity");
const instructor_department_entity_1 = require("./instructor_department/instructor_department.entity");
const student_department_entity_1 = require("./student_department/student_department.entity");
const semester_entity_1 = require("./semester/semester.entity");
const course_semester_entity_1 = require("./course_semester/course_semester.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'collegedb',
    entities: [user_information_entity_1.UserInformation, student_entity_1.Student, instructor_entity_1.Instructor, student_instructor_entity_1.StudentInstructor, courses_entity_1.Course, course_department_entity_1.CourseDepartment, department_entity_1.Department, instructor_department_entity_1.InstructorDepartment, student_department_entity_1.StudentDepartment, semester_entity_1.Semester, course_semester_entity_1.CourseSemester],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map