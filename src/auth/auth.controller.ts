import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto, SignUpDto } from './auth-dto/auth-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body(ValidationPipe) data: LogInDto) {
    return this.authService.login(data);
  }

  @Post('signup')
  signup(@Body(ValidationPipe) data: SignUpDto) {
    return this.authService.signup(data);
  }
}
