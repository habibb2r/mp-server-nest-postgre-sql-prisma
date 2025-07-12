import { Injectable, NotFoundException } from '@nestjs/common';
import { LogInDto, SignUpDto } from './auth-dto/auth-dto';

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

  signup(signupData: SignUpDto) {
    const isUserExist = this.users.find(
      (user) => user.email === signupData.email,
    );
    if (isUserExist) throw new Error('User Already Exist');
    const highestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: highestId[0].id + 1,
      ...signupData,
    };
    this.users.push(newUser);
    return newUser;
  }
}
