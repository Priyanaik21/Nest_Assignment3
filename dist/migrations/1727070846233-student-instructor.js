"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInstructor1727070846233 = void 0;
const typeorm_1 = require("typeorm");
class StudentInstructor1727070846233 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'student_instructor',
            columns: [
                {
                    name: 'studentInstructorId',
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
                    name: 'instructorId',
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
        await queryRunner.createForeignKey('student_instructor', new typeorm_1.TableForeignKey({
            columnNames: ['studentId'],
            referencedColumnNames: ['studentId'],
            referencedTableName: 'student',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('student_instructor', new typeorm_1.TableForeignKey({
            columnNames: ['instructorId'],
            referencedColumnNames: ['instructorId'],
            referencedTableName: 'instructor',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('student_instructor');
        const foreignKeyStudent = table.foreignKeys.find(fk => fk.columnNames.indexOf('studentId') !== -1);
        const foreignKeyInstructor = table.foreignKeys.find(fk => fk.columnNames.indexOf('instructorId') !== -1);
        await queryRunner.dropForeignKey('student_instructor', foreignKeyStudent);
        await queryRunner.dropForeignKey('student_instructor', foreignKeyInstructor);
        await queryRunner.dropTable('student_instructor');
    }
}
exports.StudentInstructor1727070846233 = StudentInstructor1727070846233;
//# sourceMappingURL=1727070846233-student-instructor.js.map