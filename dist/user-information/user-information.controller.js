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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInformationController = void 0;
const common_1 = require("@nestjs/common");
const user_information_service_1 = require("./user-information.service");
const user_information_dto_1 = require("./user-information.dto");
const common_2 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UserInformationController = class UserInformationController {
    constructor(userInformationService) {
        this.userInformationService = userInformationService;
    }
    async create(createUserInformationDto) {
        return this.userInformationService.create(createUserInformationDto);
    }
    async findAll(query) {
        return this.userInformationService.findAll(query);
    }
    async findOne(id) {
        return this.userInformationService.findOne(id);
    }
    async update(id, updateUserInformationDto) {
        return this.userInformationService.update(id, updateUserInformationDto);
    }
    async delete(id) {
        return this.userInformationService.delete(id);
    }
};
exports.UserInformationController = UserInformationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_information_dto_1.CreateUserInformationDto]),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_information_dto_1.UpdateUserInformationDto]),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "delete", null);
exports.UserInformationController = UserInformationController = __decorate([
    (0, common_1.Controller)('user-information'),
    __metadata("design:paramtypes", [user_information_service_1.UserInformationService])
], UserInformationController);
//# sourceMappingURL=user-information.controller.js.map