import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSemesterDto {
  @IsNotEmpty()
  @IsString()
  semesterName: string;
}

export class UpdateSemesterDto {
  @IsString()
  semesterName?: string;
}
