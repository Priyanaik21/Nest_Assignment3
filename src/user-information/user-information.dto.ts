import { IsString, IsInt, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserInformationDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  firstName: string; 

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  lastName: string; 

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  address: string;
}

export class UpdateUserInformationDto {
  @IsString()
  @Length(1, 50)
  firstName?: string; 

  @IsString()
  @Length(1, 50)
  lastName?: string; 

  @IsInt()
  age?: number;

  @IsEmail()
  email?: string;

  @IsString()
  @Length(1, 100)
  address?: string;
}
