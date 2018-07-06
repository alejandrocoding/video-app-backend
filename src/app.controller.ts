import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController{

  @Get()
  main() {
    return `Hello World! -PORT: ${process.env.PORT} -ALEX:${process.env.ALEX}`;
  }
}