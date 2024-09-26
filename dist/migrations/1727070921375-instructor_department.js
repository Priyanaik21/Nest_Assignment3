"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorDepartment1727070921375 = void 0;
const typeorm_1 = require("typeorm");
class InstructorDepartment1727070921375 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'instructor_department',
            columns: [
                {
                    name: 'instructorDepartmentId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'instructorId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'departmentId',
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
        await queryRunner.createForeignKey('instructor_department', new typeorm_1.TableForeignKey({
            columnNames: ['instructorId'],
            referencedColumnNames: ['instructorId'],
            referencedTableName: 'instructor',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('instructor_department', new typeorm_1.TableForeignKey({
            columnNames: ['departmentId'],
            referencedColumnNames: ['departmentId'],
            referencedTableName: 'department',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('instructor_department');
        const foreignKeyInstructor = table.foreignKeys.find(fk => fk.columnNames.indexOf('instructorId') !== -1);
        const foreignKeyDepartment = table.foreignKeys.find(fk => fk.columnNames.indexOf('departmentId') !== -1);
        await queryRunner.dropForeignKey('instructor_department', foreignKeyInstructor);
        await queryRunner.dropForeignKey('instructor_department', foreignKeyDepartment);
        await queryRunner.dropTable('instructor_department');
    }
}
exports.InstructorDepartment1727070921375 = InstructorDepartment1727070921375;
//# sourceMappingURL=1727070921375-instructor_department.js.map