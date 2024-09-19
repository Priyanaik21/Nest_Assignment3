import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserInformation } from '../user-information/user-information.entity';

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  instructorId: number;

  @ManyToOne(() => UserInformation, (userInformation) => userInformation.instructors, { onDelete: 'CASCADE' })
  userInformation: UserInformation;
}
