import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(signupDto: Prisma.UserCreateInput) {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(signupDto.password, saltRounds);
    signupDto.password = hashedPassword;
    const createdUser = await this.databaseService.user.create({
      data: signupDto,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...resData } = createdUser;
    return resData;
  }

  async getAllUsers() {
    return this.databaseService.user.findMany();
  }

  async getSingleUser(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async updateSpecificUser(id: number, updateData: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateData,
    });
  }

  async deleteUser(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
