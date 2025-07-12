import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() data: object) {
    return data;
  }

  @Post('signup')
  signup(@Body() data: object) {
    return data;
  }
}
