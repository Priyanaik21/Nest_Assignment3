import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserInformation } from '../user-information/user-information.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  studentId: number; 

  @ManyToOne(() => UserInformation, userInformation => userInformation.students, { onDelete: 'CASCADE' })
  userInformation: UserInformation;
}
