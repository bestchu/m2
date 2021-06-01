import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { PasswordService } from './services/password.service';
@Global()
@Module({
  imports: [ConfigModule],
  providers: [PasswordService],
  exports: [PasswordService],
})
export class CommonModule {}
