import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class InitialMigration1726728562602 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // UserInformation table
        await queryRunner.createTable(new Table({
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

        // Student table
        await queryRunner.createTable(new Table({
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

        // Instructor table
        await queryRunner.createTable(new Table({
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

        // StudentInstructor table
        await queryRunner.createTable(new Table({
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

        // foreign key constraints
        await queryRunner.createForeignKey('student', new TableForeignKey({
            columnNames: ['userInformationId'],
            referencedTableName: 'user_information',
            referencedColumnNames: ['userId'],
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('instructor', new TableForeignKey({
            columnNames: ['userInformationId'],
            referencedTableName: 'user_information',
            referencedColumnNames: ['userId'],
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('student_instructor', new TableForeignKey({
            columnNames: ['studentId'],
            referencedTableName: 'student',
            referencedColumnNames: ['studentId'],
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('student_instructor', new TableForeignKey({
            columnNames: ['instructorId'],
            referencedTableName: 'instructor',
            referencedColumnNames: ['instructorId'],
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key constraints
        const studentInstructorTable = await queryRunner.getTable('student_instructor');
        if (studentInstructorTable) {
            const studentForeignKey = studentInstructorTable.foreignKeys.find(fk => fk.columnNames.indexOf('studentId') !== -1);
            const instructorForeignKey = studentInstructorTable.foreignKeys.find(fk => fk.columnNames.indexOf('instructorId') !== -1);

            if (studentForeignKey) await queryRunner.dropForeignKey('student_instructor', studentForeignKey);
            if (instructorForeignKey) await queryRunner.dropForeignKey('student_instructor', instructorForeignKey);
        }

        await queryRunner.dropForeignKey('student', 'FK_user_information');
        await queryRunner.dropForeignKey('instructor', 'FK_user_information');

        // Drop tables
        await queryRunner.dropTable('student_instructor');
        await queryRunner.dropTable('instructor');
        await queryRunner.dropTable('student');
        await queryRunner.dropTable('user_information');
    }
}
