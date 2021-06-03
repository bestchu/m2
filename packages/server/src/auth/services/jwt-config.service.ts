import { Inject, Injectable } from '@nestjs/common';
import { Conf, confKey } from '../../config';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  @Inject(confKey('swagger'))
  private securityConfig: Conf<'security'>;
  public createJwtOptions(): Promise<JwtModuleOptions> | JwtModuleOptions {
    return {
      secret: this.securityConfig.jwtSecret,
      signOptions: { expiresIn: this.securityConfig.expiresIn },
    };
  }
}
