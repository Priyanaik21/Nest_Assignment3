import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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
  
  @OneToMany(() => Student, student => student.userInformation)
  students: Student[];

  @OneToMany(() => Instructor, instructor => instructor.userInformation)
  instructors: Instructor[];
}
