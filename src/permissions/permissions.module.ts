import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { PermissionSchema } from './schemas/permission.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Permission', schema: PermissionSchema }])],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionModule { }
