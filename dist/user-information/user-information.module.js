"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInformationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_information_service_1 = require("./user-information.service");
const user_information_controller_1 = require("./user-information.controller");
const user_information_entity_1 = require("./user-information.entity");
const student_entity_1 = require("../student/student.entity");
const instructor_entity_1 = require("../instructor/instructor.entity");
let UserInformationModule = class UserInformationModule {
};
exports.UserInformationModule = UserInformationModule;
exports.UserInformationModule = UserInformationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_information_entity_1.UserInformation, student_entity_1.Student, instructor_entity_1.Instructor])],
        providers: [user_information_service_1.UserInformationService],
        controllers: [user_information_controller_1.UserInformationController],
        exports: [user_information_service_1.UserInformationService],
    })
], UserInformationModule);
//# sourceMappingURL=user-information.module.js.map