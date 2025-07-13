import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto, UpdateUserDto } from './usersDto/users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  create(@Body() signUpDto: SignUpDto) {
    return this.userService.create(signUpDto);
  }

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
