import { JwtDto } from '../dto';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services';
import { Account } from '../../account/entities';
import { ConfigKeys, Config } from '../../config';
import { Request } from 'express';
const authHeaderAsBearerToken = ExtractJwt.fromAuthHeaderAsBearerToken();
function fromAuthHeaderAsBearerToken(request: Request) {
  return authHeaderAsBearerToken(request);
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    @Inject(ConfigKeys.security) private securityConfig: Config['security'],
  ) {
    super({
      jwtFromRequest: fromAuthHeaderAsBearerToken,
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: securityConfig.jwtSecret,
    });
  }
  async validate(payload: JwtDto): Promise<Account> {
    const account = await this.authService.validateUser(payload.aid);
    if (!account) {
      throw new UnauthorizedException();
    }
    return account;
  }
}
