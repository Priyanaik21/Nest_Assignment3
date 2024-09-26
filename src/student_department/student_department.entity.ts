import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { Student } from '../student/student.entity';
import { Department } from '../department/department.entity';

@Entity()
export class StudentDepartment {
  @PrimaryGeneratedColumn()
  studentDepartmentId: number;

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

  @ManyToOne(() => Student, student => student.studentId, { onDelete: 'CASCADE' })
  student: Student;

  @ManyToOne(() => Department, department => department.departmentId, { onDelete: 'CASCADE' })
  department: Department;
}
