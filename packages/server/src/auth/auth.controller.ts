import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { Account } from '../account/entities';
import { Credentials } from './dto/credentials';
import { UnauthorizedException } from '@nestjs/common';
import { PublicGuard } from './guards';
import { Auth } from './entities';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @PublicGuard()
  @Post('login')
  async login(@Body() body: Credentials): Promise<Auth> {
    const user = await this.authService.login(body);
    if (!user) {
      throw new UnauthorizedException('The passed credentials are incorrect');
    }
    return user;
  }
  // 自动注册并登录
  async authorize() {
    //
  }
}
