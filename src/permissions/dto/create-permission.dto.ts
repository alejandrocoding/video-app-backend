import { PermissionTarget } from '../enums/permission-target.enum';

export class CreatePermissionDTO {
    readonly name: string;
    readonly target: PermissionTarget;
  }
