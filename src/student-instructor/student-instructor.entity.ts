import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from '../student/student.entity';
import { Instructor } from '../instructor/instructor.entity';

@Entity()
export class StudentInstructor {
  @PrimaryGeneratedColumn()
  studentInstructorId: number;

  @ManyToOne(() => Student, student => student.studentId, { onDelete: 'CASCADE' })
  student: Student;

  @ManyToOne(() => Instructor, instructor => instructor.instructorId, { onDelete: 'CASCADE' })
  instructor: Instructor;
}
