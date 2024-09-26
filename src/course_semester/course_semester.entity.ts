import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { Course } from '../courses/courses.entity';
import { Semester } from '../semester/semester.entity';

@Entity()
export class CourseSemester {
  @PrimaryGeneratedColumn()
  courseSemesterId: number;

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

  @ManyToOne(() => Course, course => course.courseId, { onDelete: 'CASCADE' })
  course: Course;

  @ManyToOne(() => Semester, semester => semester.semesterId, { onDelete: 'CASCADE' })
  semester: Semester;
}
