import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CourseDepartment1727070959642 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.createTable(new Table({
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

        // foreign key for courseId
        await queryRunner.createForeignKey('course_department', new TableForeignKey({
            columnNames: ['courseId'],
            referencedColumnNames: ['courseId'],
            referencedTableName: 'course',
            onDelete: 'CASCADE',
        }));

        // foreign key for departmentId
        await queryRunner.createForeignKey('course_department', new TableForeignKey({
            columnNames: ['departmentId'],
            referencedColumnNames: ['departmentId'],
            referencedTableName: 'department',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys
        const table = await queryRunner.getTable('course_department');
        const foreignKeyCourse = table.foreignKeys.find(fk => fk.columnNames.indexOf('courseId') !== -1);
        const foreignKeyDepartment = table.foreignKeys.find(fk => fk.columnNames.indexOf('departmentId') !== -1);

        await queryRunner.dropForeignKey('course_department', foreignKeyCourse);
        await queryRunner.dropForeignKey('course_department', foreignKeyDepartment);

        // Drop the CourseDepartment table
        await queryRunner.dropTable('course_department');
    }

}
