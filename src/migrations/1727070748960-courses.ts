import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Courses1727070748960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      
        await queryRunner.createTable(new Table({
            name: 'course',
            columns: [
                {
                    name: 'courseId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'courseName',
                    type: 'varchar',
                    length: '50',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the Course table
        await queryRunner.dropTable('course');
    }

}
