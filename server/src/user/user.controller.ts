/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('allUser')
  findAllUser(@Query() query) {
    //     tìm kiếm , lọc, phân trang
    const { page, limit } = query;
    this.userService.findAllUser(query.query, page, limit);
  }
}
