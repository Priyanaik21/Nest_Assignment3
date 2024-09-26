"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDepartment1727070959642 = void 0;
const typeorm_1 = require("typeorm");
class CourseDepartment1727070959642 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'course_department',
            columns: [
                {
                    name: 'courseDepartmentId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'courseId',
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
        await queryRunner.createForeignKey('course_department', new typeorm_1.TableForeignKey({
            columnNames: ['courseId'],
            referencedColumnNames: ['courseId'],
            referencedTableName: 'course',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('course_department', new typeorm_1.TableForeignKey({
            columnNames: ['departmentId'],
            referencedColumnNames: ['departmentId'],
            referencedTableName: 'department',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('course_department');
        const foreignKeyCourse = table.foreignKeys.find(fk => fk.columnNames.indexOf('courseId') !== -1);
        const foreignKeyDepartment = table.foreignKeys.find(fk => fk.columnNames.indexOf('departmentId') !== -1);
        await queryRunner.dropForeignKey('course_department', foreignKeyCourse);
        await queryRunner.dropForeignKey('course_department', foreignKeyDepartment);
        await queryRunner.dropTable('course_department');
    }
}
exports.CourseDepartment1727070959642 = CourseDepartment1727070959642;
//# sourceMappingURL=1727070959642-course_department.js.map