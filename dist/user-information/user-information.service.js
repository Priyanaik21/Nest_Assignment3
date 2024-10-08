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
const paginationSearchSort_1 = require("../utils/paginationSearchSort");
const bcrypt = require("bcryptjs");
let UserInformationService = class UserInformationService {
    constructor(dataSource, userInformationRepository) {
        this.dataSource = dataSource;
        this.userInformationRepository = userInformationRepository;
    }
    async create(createUserInformationDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const newUserInformation = this.dataSource.getRepository(user_information_entity_1.UserInformation).create(createUserInformationDto);
            newUserInformation.password = bcrypt.hashSync(newUserInformation.password, 10);
            const savedUserInformation = await queryRunner.manager.save(newUserInformation);
            await queryRunner.commitTransaction();
            return savedUserInformation;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll(queryParams) {
        const searchFields = ['firstName', 'lastName', 'email', 'address'];
        const { skip, take, order, where } = (0, paginationSearchSort_1.applyPaginationSearchSort)(queryParams, searchFields);
        return this.dataSource.getRepository(user_information_entity_1.UserInformation).find({
            skip,
            take,
            order,
            where: where || {},
            relations: ['students', 'instructors'],
        });
    }
    async findOne(id) {
        const userInformation = await this.dataSource.getRepository(user_information_entity_1.UserInformation).findOne({
            where: { userId: id },
            relations: ['students', 'instructors'],
        });
        if (!userInformation) {
            throw new common_1.NotFoundException('UserInformation not found');
        }
        return userInformation;
    }
    async update(id, updateUserInformationDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userInformation = await queryRunner.manager.findOne(user_information_entity_1.UserInformation, {
                where: { userId: id },
            });
            if (!userInformation) {
                throw new common_1.NotFoundException('UserInformation not found');
            }
            Object.assign(userInformation, updateUserInformationDto);
            await queryRunner.manager.save(userInformation);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async delete(id) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userInformation = await queryRunner.manager.findOne(user_information_entity_1.UserInformation, {
                where: { userId: id },
            });
            if (!userInformation) {
                throw new common_1.NotFoundException('UserInformation not found');
            }
            await queryRunner.manager.delete(user_information_entity_1.UserInformation, id);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findOneByEmail(email) {
        return await this.userInformationRepository.findOne({ where: { email } });
    }
    async validateUser(email, pass) {
        const entity = await this.findOneByEmail(email);
        if (entity && bcrypt.compareSync(pass, entity.password)) {
            const { password, ...result } = entity;
            return result;
        }
        throw new common_1.UnauthorizedException('Invalid credentials');
    }
};
exports.UserInformationService = UserInformationService;
exports.UserInformationService = UserInformationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(user_information_entity_1.UserInformation)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], UserInformationService);
//# sourceMappingURL=user-information.service.js.map