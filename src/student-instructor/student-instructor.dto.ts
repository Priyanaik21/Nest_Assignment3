import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentInstructorDto {
  @IsNotEmpty()
  @IsNumber()
  studentId: number;

  @IsNotEmpty()
  @IsNumber()
  instructorId: number;
}

export class UpdateStudentInstructorDto {
  @IsNumber()
  studentId?: number;

  @IsNumber()
  instructorId?: number;
}
