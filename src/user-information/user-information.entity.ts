import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';

@Entity()
export class UserInformation {
  @PrimaryGeneratedColumn()
  userId: number;  
  
  @Column({ length: 50 })
  firstName: string;  
  
  @Column({ length: 50 })
  lastName: string;
  
  @Column('int')
  age: number;
  
  @Column({ unique: true })
  email: string;
  
  @Column({ length: 100 })
  address: string;

  @Column()
  password: string;

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
  
  @OneToMany(() => Student, student => student.userInformation)
  students: Student[];

  @OneToMany(() => Instructor, instructor => instructor.userInformation)
  instructors: Instructor[];
}
