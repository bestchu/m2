import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorizeInput } from '../dto/authorize.dto';
import { Auth } from '../entities';
import { Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { AuthService } from '../services';
import { Account } from '../../account/entities';
import { Credentials } from '../dto';
import { PublicGuard } from '../guards';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Resolver()
export class AuthResolver {
  @Inject(AuthService)
  private readonly authService: AuthService;
  @Inject(EventEmitter2)
  private eventEmitter: EventEmitter2;
  @PublicGuard()
  @Mutation(() => Auth)
  // async authorize(@Args() auth: AuthorizeInput) {
  //   const account = this.authService.auth(
  //     plainToClass(Account, await this.service.wechatAppletAuth(auth.code)),
  //   );
  //   this.eventEmitter.emit('account.authorize', {
  //     account: account.account,
  //     auth,
  //   });
  //   return account;
  // }
  @PublicGuard()
  @Mutation(() => Auth)
  login(@Args('data') data: Credentials) {
    return this.authService.login(data);
  }
}
