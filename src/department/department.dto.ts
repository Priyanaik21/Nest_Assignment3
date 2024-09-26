import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  departmentName: string;
}

export class UpdateDepartmentDto {
  @IsString()
  @Length(1, 50)
  departmentName?: string;
}
