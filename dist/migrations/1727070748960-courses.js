"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courses1727070748960 = void 0;
const typeorm_1 = require("typeorm");
class Courses1727070748960 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'course',
            columns: [
                {
                    name: 'courseId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'courseName',
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
        await queryRunner.dropTable('course');
    }
}
exports.Courses1727070748960 = Courses1727070748960;
//# sourceMappingURL=1727070748960-courses.js.map