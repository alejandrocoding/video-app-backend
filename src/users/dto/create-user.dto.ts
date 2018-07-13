export class CreateUserDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly isVerified: boolean;
  readonly roleId: string;
}