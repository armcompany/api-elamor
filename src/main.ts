import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api/v1');
  const env = process.env.NODE_ENV;

  if (env !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('API Documentation')
      .setDescription('API docs for Praticall API')
      .setVersion('1.0')
      .addTag('Elamor', 'Elamor API')
      .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(parseInt(process.env.APP_PORT));
}
bootstrap();
