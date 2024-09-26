import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Instructor1727070722678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      
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

        // foreign key constraint to userInformationId
        await queryRunner.createForeignKey('instructor', new TableForeignKey({
            columnNames: ['userInformationId'],
            referencedColumnNames: ['userId'],
            referencedTableName: 'user_information',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the foreign key
        const table = await queryRunner.getTable('instructor');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('userInformationId') !== -1);
        await queryRunner.dropForeignKey('instructor', foreignKey);

        // Drop the Instructor table
        await queryRunner.dropTable('instructor');
    }

}
