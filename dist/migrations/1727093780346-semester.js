"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semester1727093780346 = void 0;
const typeorm_1 = require("typeorm");
class Semester1727093780346 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'semester',
            columns: [
                {
                    name: 'semesterId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'semesterName',
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
        await queryRunner.dropTable('semester');
    }
}
exports.Semester1727093780346 = Semester1727093780346;
//# sourceMappingURL=1727093780346-semester.js.map