import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import userMock from './utils/userMock';

@Injectable()
export class AppService {
  constructor(private readonly userService: UsersService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async seed() {
    await this.userService.insertMany(userMock);
  }
}
