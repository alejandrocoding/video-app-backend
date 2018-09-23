import { PermissionType } from '../enums/permission-type.enum';

export class CreatePermissionDTO {
    readonly name: string;
    readonly type: PermissionType;
  }
