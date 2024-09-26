import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  courseName: string;
}

export class UpdateCourseDto {
  @IsString()
  @Length(1, 50)
  courseName?: string;
}
