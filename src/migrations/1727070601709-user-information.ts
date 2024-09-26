import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class UserInformation1727070601709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      
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
                    isNullable: false,
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                },
                {
                    name: 'age',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'address',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                },

                {
                    name: 'password', 
                    type: 'varchar',
                    length: '255', 
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

        // Create foreign keys for relationships
        await queryRunner.createForeignKey('student', new TableForeignKey({
            columnNames: ['userInformationId'],
            referencedColumnNames: ['userId'],
            referencedTableName: 'user_information',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('instructor', new TableForeignKey({
            columnNames: ['userInformationId'],
            referencedColumnNames: ['userId'],
            referencedTableName: 'user_information',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys first
        const studentTable = await queryRunner.getTable('student');
        const instructorTable = await queryRunner.getTable('instructor');

        const studentForeignKey = studentTable.foreignKeys.find(fk => fk.columnNames.indexOf('userInformationId') !== -1);
        const instructorForeignKey = instructorTable.foreignKeys.find(fk => fk.columnNames.indexOf('userInformationId') !== -1);

        await queryRunner.dropForeignKey('student', studentForeignKey);
        await queryRunner.dropForeignKey('instructor', instructorForeignKey);

       //Drop the UserInformation table
        await queryRunner.dropTable('user_information');
    }

}
