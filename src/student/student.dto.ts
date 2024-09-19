import { IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsInt()
  userInformationId: number; 
}

export class UpdateStudentDto {
  @IsOptional()
  @IsInt()
  userInformationId?: number;
}
