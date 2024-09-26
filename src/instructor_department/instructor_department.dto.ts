import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInstructorDepartmentDto {
  @IsNotEmpty()
  @IsNumber()
  instructorId: number;

  @IsNotEmpty()
  @IsNumber()
  departmentId: number;
}

export class UpdateInstructorDepartmentDto {
  @IsNumber()
  instructorId?: number;

  @IsNumber()
  departmentId?: number;
}
