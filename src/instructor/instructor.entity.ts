import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserInformation } from '../user-information/user-information.entity';

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  instructor_id: number;

  @ManyToOne(() => UserInformation, userInformation => userInformation.user_id, { onDelete: 'CASCADE' })
  userInformation: UserInformation;
}
