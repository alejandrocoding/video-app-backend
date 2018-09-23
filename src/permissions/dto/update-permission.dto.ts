import { PermissionTarget } from '../enums/permission-target.enum';

export class UpdatePermissionDTO {
  readonly name: string;
  readonly target: PermissionTarget;
}
