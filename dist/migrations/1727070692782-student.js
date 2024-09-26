"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student1727070692782 = void 0;
const typeorm_1 = require("typeorm");
class Student1727070692782 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'student',
            columns: [
                {
                    name: 'studentId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'userInformationId',
                    type: 'int',
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
        await queryRunner.createForeignKey('student', new typeorm_1.TableForeignKey({
            columnNames: ['userInformationId'],
            referencedColumnNames: ['userId'],
            referencedTableName: 'user_information',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('student');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('userInformationId') !== -1);
        await queryRunner.dropForeignKey('student', foreignKey);
        await queryRunner.dropTable('student');
    }
}
exports.Student1727070692782 = Student1727070692782;
//# sourceMappingURL=1727070692782-student.js.map