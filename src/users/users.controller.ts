import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto, UpdateUserDto } from './usersDto/users-dto';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { RolesGuard } from 'src/guard/role.guard';
import { Roles } from 'src/decoretor/role.decorator';
import { Role } from 'generated/prisma';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.user)
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  create(@Body() signUpDto: SignUpDto) {
    return this.userService.create(signUpDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Get(':id')
  getSingleUser(@Param('id') id: string) {
    return this.userService.getSingleUser(+id);
  }

  @Patch(':id')
  updateSpecificUser(
    @Param('id') id: string,
    @Body() updateData: UpdateUserDto,
  ) {
    return this.userService.updateSpecificUser(+id, updateData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
