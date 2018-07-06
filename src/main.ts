import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

async function bootstrap() {
  const port = process.env.PORT || 3333;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.info(`Open the App here: http://localhost:${port}/`);
}

bootstrap();