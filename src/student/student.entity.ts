import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { UserInformation } from '../user-information/user-information.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  studentId: number; 

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ length: 50, nullable: true })
  created_by: string;

  @Column({ length: 50, nullable: true })
  updated_by: string;

  @ManyToOne(() => UserInformation, userInformation => userInformation.students, { onDelete: 'CASCADE' })
  userInformation: UserInformation;
}
