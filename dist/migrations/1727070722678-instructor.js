"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor1727070722678 = void 0;
const typeorm_1 = require("typeorm");
class Instructor1727070722678 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'instructor',
            columns: [
                {
                    name: 'instructorId',
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
        await queryRunner.createForeignKey('instructor', new typeorm_1.TableForeignKey({
            columnNames: ['userInformationId'],
            referencedColumnNames: ['userId'],
            referencedTableName: 'user_information',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('instructor');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('userInformationId') !== -1);
        await queryRunner.dropForeignKey('instructor', foreignKey);
        await queryRunner.dropTable('instructor');
    }
}
exports.Instructor1727070722678 = Instructor1727070722678;
//# sourceMappingURL=1727070722678-instructor.js.map