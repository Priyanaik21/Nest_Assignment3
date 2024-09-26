import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class InstructorDepartment1727070921375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
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

        //foreign key for instructorId
        await queryRunner.createForeignKey('instructor_department', new TableForeignKey({
            columnNames: ['instructorId'],
            referencedColumnNames: ['instructorId'],
            referencedTableName: 'instructor',
            onDelete: 'CASCADE',
        }));

        // foreign key for departmentId
        await queryRunner.createForeignKey('instructor_department', new TableForeignKey({
            columnNames: ['departmentId'],
            referencedColumnNames: ['departmentId'],
            referencedTableName: 'department',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys
        const table = await queryRunner.getTable('instructor_department');
        const foreignKeyInstructor = table.foreignKeys.find(fk => fk.columnNames.indexOf('instructorId') !== -1);
        const foreignKeyDepartment = table.foreignKeys.find(fk => fk.columnNames.indexOf('departmentId') !== -1);

        await queryRunner.dropForeignKey('instructor_department', foreignKeyInstructor);
        await queryRunner.dropForeignKey('instructor_department', foreignKeyDepartment);

        // Drop the InstructorDepartment table
        await queryRunner.dropTable('instructor_department');
    }

}
