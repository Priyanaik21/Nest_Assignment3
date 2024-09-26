import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { CourseDepartment } from '../course_department/course_department.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  courseId: number;

  @Column({ length: 50 })
  courseName: string;

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

  @OneToMany(() => CourseDepartment, courseDepartment => courseDepartment.course)
  courseDepartments: CourseDepartment[];
}
