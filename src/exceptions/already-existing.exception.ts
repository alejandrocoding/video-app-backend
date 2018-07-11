import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyExistingException extends HttpException {
  constructor(name?: string) {
    const msg = (name) ? `Already existing resource. ${name}` : `Already existing resource.`;
    super(msg, HttpStatus.CONFLICT);
  }
}