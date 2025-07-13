import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(signupDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: signupDto,
    });
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
