import { Injectable } from '@nestjs/common';
import { LogInDto } from './auth-dto/auth-dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}
  async signin(loginData: LogInDto) {
    return this.databaseService.user.findUnique({
      where: {
        email: loginData.email,
        password: loginData.password,
      },
    });
  }
}
