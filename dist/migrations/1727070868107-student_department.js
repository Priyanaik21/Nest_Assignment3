"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDepartment1727070868107 = void 0;
const typeorm_1 = require("typeorm");
class StudentDepartment1727070868107 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'student_department',
            columns: [
                {
                    name: 'studentDepartmentId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'studentId',
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
        await queryRunner.createForeignKey('student_department', new typeorm_1.TableForeignKey({
            columnNames: ['studentId'],
            referencedColumnNames: ['studentId'],
            referencedTableName: 'student',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('student_department', new typeorm_1.TableForeignKey({
            columnNames: ['departmentId'],
            referencedColumnNames: ['departmentId'],
            referencedTableName: 'department',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('student_department');
        const foreignKeyStudent = table.foreignKeys.find(fk => fk.columnNames.indexOf('studentId') !== -1);
        const foreignKeyDepartment = table.foreignKeys.find(fk => fk.columnNames.indexOf('departmentId') !== -1);
        await queryRunner.dropForeignKey('student_department', foreignKeyStudent);
        await queryRunner.dropForeignKey('student_department', foreignKeyDepartment);
        await queryRunner.dropTable('student_department');
    }
}
exports.StudentDepartment1727070868107 = StudentDepartment1727070868107;
//# sourceMappingURL=1727070868107-student_department.js.map