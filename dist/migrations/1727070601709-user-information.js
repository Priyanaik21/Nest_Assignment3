"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInformation1727070601709 = void 0;
const typeorm_1 = require("typeorm");
class UserInformation1727070601709 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_information',
            columns: [
                {
                    name: 'userId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                },
                {
                    name: 'age',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'address',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'created_by',
                    type: 'varchar',
                    length: '50',
                    isNullable: true,
                },
                {
                    name: 'updated_by',
                    type: 'varchar',
                    length: '50',
                    isNullable: true,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('user_information');
    }
}
exports.UserInformation1727070601709 = UserInformation1727070601709;
//# sourceMappingURL=1727070601709-user-information.js.map