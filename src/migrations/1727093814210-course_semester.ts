import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CourseSemester1727093814210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
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

        //  foreign key for courseId
        await queryRunner.createForeignKey('course_semester', new TableForeignKey({
            columnNames: ['courseId'],
            referencedColumnNames: ['courseId'],
            referencedTableName: 'course',
            onDelete: 'CASCADE',
        }));

        //  foreign key for semesterId
        await queryRunner.createForeignKey('course_semester', new TableForeignKey({
            columnNames: ['semesterId'],
            referencedColumnNames: ['semesterId'],
            referencedTableName: 'semester',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys 
        await queryRunner.dropForeignKey('course_semester', 'FK_course_semester_course');
        await queryRunner.dropForeignKey('course_semester', 'FK_course_semester_semester');

        // Drop the course_semester table
        await queryRunner.dropTable('course_semester');
    }
}
