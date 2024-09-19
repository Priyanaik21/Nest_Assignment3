"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1726728562602 = void 0;
const typeorm_1 = require("typeorm");
class InitialMigration1726728562602 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_information',
            columns: [
                {
                    name: 'userId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                    length: '50',
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    length: '50',
                },
                {
                    name: 'age',
                    type: 'int',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '100',
                    isUnique: true,
                },
                {
                    name: 'address',
                    type: 'varchar',
                    length: '100',
                },
            ],
        }));
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
                },
            ],
        }));
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
                },
            ],
        }));
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
                },
                {
                    name: 'instructorId',
                    type: 'int',
                },
            ],
        }));
        await queryRunner.createForeignKey('student', new typeorm_1.TableForeignKey({
            columnNames: ['userInformationId'],
            referencedTableName: 'user_information',
            referencedColumnNames: ['userId'],
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('instructor', new typeorm_1.TableForeignKey({
            columnNames: ['userInformationId'],
            referencedTableName: 'user_information',
            referencedColumnNames: ['userId'],
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('student_instructor', new typeorm_1.TableForeignKey({
            columnNames: ['studentId'],
            referencedTableName: 'student',
            referencedColumnNames: ['studentId'],
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('student_instructor', new typeorm_1.TableForeignKey({
            columnNames: ['instructorId'],
            referencedTableName: 'instructor',
            referencedColumnNames: ['instructorId'],
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const studentInstructorTable = await queryRunner.getTable('student_instructor');
        if (studentInstructorTable) {
            const studentForeignKey = studentInstructorTable.foreignKeys.find(fk => fk.columnNames.indexOf('studentId') !== -1);
            const instructorForeignKey = studentInstructorTable.foreignKeys.find(fk => fk.columnNames.indexOf('instructorId') !== -1);
            if (studentForeignKey)
                await queryRunner.dropForeignKey('student_instructor', studentForeignKey);
            if (instructorForeignKey)
                await queryRunner.dropForeignKey('student_instructor', instructorForeignKey);
        }
        await queryRunner.dropForeignKey('student', 'FK_user_information');
        await queryRunner.dropForeignKey('instructor', 'FK_user_information');
        await queryRunner.dropTable('student_instructor');
        await queryRunner.dropTable('instructor');
        await queryRunner.dropTable('student');
        await queryRunner.dropTable('user_information');
    }
}
exports.InitialMigration1726728562602 = InitialMigration1726728562602;
//# sourceMappingURL=1726728562602-InitialMigration.js.map