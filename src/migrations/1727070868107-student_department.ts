import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class StudentDepartment1727070868107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
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

        //foreign key for studentId
        await queryRunner.createForeignKey('student_department', new TableForeignKey({
            columnNames: ['studentId'],
            referencedColumnNames: ['studentId'],
            referencedTableName: 'student',
            onDelete: 'CASCADE',
        }));

        // foreign key for departmentId
        await queryRunner.createForeignKey('student_department', new TableForeignKey({
            columnNames: ['departmentId'],
            referencedColumnNames: ['departmentId'],
            referencedTableName: 'department',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys
        const table = await queryRunner.getTable('student_department');
        const foreignKeyStudent = table.foreignKeys.find(fk => fk.columnNames.indexOf('studentId') !== -1);
        const foreignKeyDepartment = table.foreignKeys.find(fk => fk.columnNames.indexOf('departmentId') !== -1);

        await queryRunner.dropForeignKey('student_department', foreignKeyStudent);
        await queryRunner.dropForeignKey('student_department', foreignKeyDepartment);

        // Drop the StudentDepartment table
        await queryRunner.dropTable('student_department');
    }

}
