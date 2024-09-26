import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCourseSemesterDto {
  @IsNotEmpty()
  @IsNumber()
  courseId: number;

  @IsNotEmpty()
  @IsNumber()
  semesterId: number;
}

export class UpdateCourseSemesterDto {
  @IsNumber()
  courseId?: number;

  @IsNumber()
  semesterId?: number;
}
