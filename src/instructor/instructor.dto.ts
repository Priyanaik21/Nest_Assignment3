import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInstructorDto {
  @IsNotEmpty()
  @IsNumber()
  userInformationId: number;
}

export class UpdateInstructorDto {
  @IsNumber()
  userInformationId?: number;
}
