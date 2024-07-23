import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { HealthcheckModule } from './infra/modules/healthcheck.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.secret,
    }),
    HealthcheckModule,
  ],
  providers: [],
})
export class AppModule {}
