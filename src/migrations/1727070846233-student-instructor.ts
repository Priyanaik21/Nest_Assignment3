import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class StudentInstructor1727070846233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
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

        // foreign key for studentId
        await queryRunner.createForeignKey('student_instructor', new TableForeignKey({
            columnNames: ['studentId'],
            referencedColumnNames: ['studentId'],
            referencedTableName: 'student',
            onDelete: 'CASCADE',
        }));

        //  foreign key for instructorId
        await queryRunner.createForeignKey('student_instructor', new TableForeignKey({
            columnNames: ['instructorId'],
            referencedColumnNames: ['instructorId'],
            referencedTableName: 'instructor',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys
        const table = await queryRunner.getTable('student_instructor');
        const foreignKeyStudent = table.foreignKeys.find(fk => fk.columnNames.indexOf('studentId') !== -1);
        const foreignKeyInstructor = table.foreignKeys.find(fk => fk.columnNames.indexOf('instructorId') !== -1);
        
        await queryRunner.dropForeignKey('student_instructor', foreignKeyStudent);
        await queryRunner.dropForeignKey('student_instructor', foreignKeyInstructor);

        // Drop the StudentInstructor table
        await queryRunner.dropTable('student_instructor');
    }
}
