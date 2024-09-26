import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Department1727070771803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name: 'department',
            columns: [
                {
                    name: 'departmentId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'departmentName',
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
        // Drop the Department table
        await queryRunner.dropTable('department');
    }

}
