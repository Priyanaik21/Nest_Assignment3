import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { UserInformation } from '../user-information/user-information.entity';
import { InstructorDepartment } from 'src/instructor_department/instructor_department.entity';

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  instructorId: number;

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

  @ManyToOne(() => UserInformation, (userInformation) => userInformation.instructors, { onDelete: 'CASCADE' })
  userInformation: UserInformation;

  @OneToMany(() => InstructorDepartment, (userInformation) => userInformation.instructor, { onDelete: 'CASCADE' })
  instructor_Id : InstructorDepartment;
}
