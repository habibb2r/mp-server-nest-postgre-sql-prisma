import { Injectable, NotFoundException } from '@nestjs/common';
import { LogInDto } from './auth-dto/auth-dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}
  async signin(loginData: LogInDto) {
    const user = await this.databaseService.user.findUnique({
      where: {
        email: loginData.email,
        password: loginData.password,
      },
    });
    if (!user)
      throw new NotFoundException(
        'Failed to login, Give correct email and password',
      );
    return 'Logged in successfully';
  }
}
