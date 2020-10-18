import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, ServicesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
