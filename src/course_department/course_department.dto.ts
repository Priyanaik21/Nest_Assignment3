import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCourseDepartmentDto {
  @IsNotEmpty()
  @IsNumber()
  courseId: number;

  @IsNotEmpty()
  @IsNumber()
  departmentId: number;
}

export class UpdateCourseDepartmentDto {
  @IsNumber()
  courseId?: number;

  @IsNumber()
  departmentId?: number;
}
