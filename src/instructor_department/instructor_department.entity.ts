import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { Instructor } from '../instructor/instructor.entity';
import { Department } from '../department/department.entity';

@Entity()
export class InstructorDepartment {
  @PrimaryGeneratedColumn()
  instructorDepartmentId: number;

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

  @ManyToOne(() => Instructor, instructor => instructor.instructor_Id, { onDelete: 'CASCADE' })
  instructor: Instructor;

  @ManyToOne(() => Department, department => department.departmentId, { onDelete: 'CASCADE' })
  department: Department;
}
