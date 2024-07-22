import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthcheckModule } from './infra/modules/healthcheck.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthcheckModule,
  ],
  providers: [],
})
export class AppModule {}
