import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';

@Entity()
export class StudentInstructor {
  @PrimaryGeneratedColumn()
  student_instructor_id: number;

  @ManyToOne(() => Student, student => student.student_id, { onDelete: 'CASCADE' })
  student: Student;

  @ManyToOne(() => Instructor, instructor => instructor.instructor_id, { onDelete: 'CASCADE' })
  instructor: Instructor;
}
