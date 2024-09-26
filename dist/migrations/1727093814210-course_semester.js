"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSemester1727093814210 = void 0;
const typeorm_1 = require("typeorm");
class CourseSemester1727093814210 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'course_semester',
            columns: [
                {
                    name: 'courseSemesterId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'courseId',
                    type: 'int',
                },
                {
                    name: 'semesterId',
                    type: 'int',
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
            ]
        }), true);
        await queryRunner.createForeignKey('course_semester', new typeorm_1.TableForeignKey({
            columnNames: ['courseId'],
            referencedColumnNames: ['courseId'],
            referencedTableName: 'course',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('course_semester', new typeorm_1.TableForeignKey({
            columnNames: ['semesterId'],
            referencedColumnNames: ['semesterId'],
            referencedTableName: 'semester',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('course_semester', 'FK_course_semester_course');
        await queryRunner.dropForeignKey('course_semester', 'FK_course_semester_semester');
        await queryRunner.dropTable('course_semester');
    }
}
exports.CourseSemester1727093814210 = CourseSemester1727093814210;
//# sourceMappingURL=1727093814210-course_semester.js.map