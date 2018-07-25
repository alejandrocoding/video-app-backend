export class UpdateUserDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly isVerified: boolean;
  readonly roleId: string;
  readonly videosId: string[];
}
