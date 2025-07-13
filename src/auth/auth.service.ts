import { Injectable, NotFoundException } from '@nestjs/common';
import { LogInDto } from './auth-dto/auth-dto';

@Injectable()
export class AuthService {
  private users = [
    {
      id: 1,
      name: 'XYZ',
      email: 'habib@mail.com',
      password: '12344',
      picture: 'image',
    },
    {
      id: 2,
      name: 'XYZ',
      email: 'habib@mai.com',
      password: '12344',
      picture: undefined,
    },
  ];
  login(loginData: LogInDto) {
    const findUser = this.users.find((user) => user.email === loginData.email);
    if (!findUser) throw new NotFoundException('User Not Found');
    if (findUser.password === loginData.password) {
      return { status: 'Login in success' };
    } else {
      return { status: 'Password mismatched' };
    }
  }
}
