"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department1727070771803 = void 0;
const typeorm_1 = require("typeorm");
class Department1727070771803 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'department',
            columns: [
                {
                    name: 'departmentId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'departmentName',
                    type: 'varchar',
                    length: '50',
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
        await queryRunner.dropTable('department');
    }
}
exports.Department1727070771803 = Department1727070771803;
//# sourceMappingURL=1727070771803-department.js.map