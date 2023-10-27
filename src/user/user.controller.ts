import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDTO) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = createUser;
    return rest;
  }
}
