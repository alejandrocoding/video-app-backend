import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

async function bootstrap() {
  const port = process.env.PORT || 3333;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.info(`http://localhost:${port}/`); // just for dev
  console.log(process.env.ALEX);
}

bootstrap();