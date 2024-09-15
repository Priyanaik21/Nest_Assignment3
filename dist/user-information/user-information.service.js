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
exports.UserInformationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_information_entity_1 = require("./user-information.entity");
let UserInformationService = class UserInformationService {
    constructor(userInformationRepository) {
        this.userInformationRepository = userInformationRepository;
    }
    async create(userInformationData) {
        return this.userInformationRepository.save(userInformationData);
    }
    async findAll() {
        return this.userInformationRepository.find();
    }
    async findOne(id) {
        return this.userInformationRepository.findOneBy({ user_id: id });
    }
    async update(id, userInformationData) {
        await this.userInformationRepository.update(id, userInformationData);
    }
    async delete(id) {
        await this.userInformationRepository.delete(id);
    }
};
exports.UserInformationService = UserInformationService;
exports.UserInformationService = UserInformationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_information_entity_1.UserInformation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserInformationService);
//# sourceMappingURL=user-information.service.js.map