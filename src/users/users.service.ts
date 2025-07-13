import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignUpDto } from './usersDto/users-dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(signupDto: SignUpDto) {
    return this.databaseService.user.create({
      data: signupDto,
    });
  }
}
