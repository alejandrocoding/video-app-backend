import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(errors: any) {
    super(`Validation error: ${JSON.stringify(errors)}`, HttpStatus.BAD_REQUEST);
  }
}