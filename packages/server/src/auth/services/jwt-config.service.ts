import { Inject, Injectable } from '@nestjs/common';
import { ConfigKeys, Config } from '../../config';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  @Inject(ConfigKeys.security)
  private securityConfig: Config['security'];
  public createJwtOptions(): Promise<JwtModuleOptions> | JwtModuleOptions {
    return {
      secret: this.securityConfig.jwtSecret,
      signOptions: { expiresIn: this.securityConfig.expiresIn },
    };
  }
}
