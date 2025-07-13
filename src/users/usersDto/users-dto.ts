import { Optional } from '@nestjs/common';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @Optional()
  picture?: string;

  @IsEnum(['admin', 'user', 'seller'], {
    message: 'Valid Role Required',
  })
  role: 'admin' | 'user' | 'seller';
}

export class UpdateUserDto extends PartialType(SignUpDto) {}
