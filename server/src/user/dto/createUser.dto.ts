import { UserEnumStatusOption } from './../config/user.config';
import {
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { userEntityConfig, UserEnumGenderOption } from '../config/user.config';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(userEntityConfig.firstName.minLength, {
    message: `First Name must be at least ${userEntityConfig.firstName.minLength} characters`,
  })
  @MaxLength(userEntityConfig.firstName.maxLength)
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(userEntityConfig.lastName.minLength)
  @MaxLength(userEntityConfig.lastName.maxLength)
  readonly lastName: string;

  @IsEnum(UserEnumGenderOption)
  readonly gender: UserEnumGenderOption;

  @MinLength(userEntityConfig.firstName.minLength, {
    message: `Password must be more than ${userEntityConfig.firstName.minLength} characters`,
  })
  readonly password: string;

  @IsEnum(UserEnumStatusOption)
  readonly status: UserEnumStatusOption;
}
