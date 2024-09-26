import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { InstructorDepartment } from '../instructor_department/instructor_department.entity';
import { StudentDepartment } from '../student_department/student_department.entity';
import { CourseDepartment } from '../course_department/course_department.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  departmentId: number;

  @Column({ length: 50 })
  departmentName: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ length: 50, nullable: true})
  created_by: string;

  @Column({ length: 50, nullable: true })
  updated_by: string;

  @OneToMany(() => InstructorDepartment, instructorDepartment => instructorDepartment.department)
  @JoinColumn()
  instructorDepartments: InstructorDepartment[];

  @OneToMany(() => StudentDepartment, studentDepartment => studentDepartment.department)
  studentDepartments: StudentDepartment[];

  @OneToMany(() => CourseDepartment, courseDepartment => courseDepartment.department)
  courseDepartments: CourseDepartment[];
}
