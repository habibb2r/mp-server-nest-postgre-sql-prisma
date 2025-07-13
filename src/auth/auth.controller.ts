import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './auth-dto/auth-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() loginData: LogInDto) {
    return this.authService.signin(loginData);
  }
}
