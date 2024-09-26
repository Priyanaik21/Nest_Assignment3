import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentDepartmentDto {
  @IsNotEmpty()
  @IsNumber()
  studentId: number;

  @IsNotEmpty()
  @IsNumber()
  departmentId: number;
}

export class UpdateStudentDepartmentDto {
  @IsNumber()
  studentId?: number;

  @IsNumber()
  departmentId?: number;
}
