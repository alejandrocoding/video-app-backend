import { HttpException, HttpStatus } from '@nestjs/common';

export class CastErrorException extends HttpException {
  constructor() {
    super('Cast Error', HttpStatus.BAD_REQUEST);
  }
}