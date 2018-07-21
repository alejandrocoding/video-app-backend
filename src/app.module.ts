import { Module } from '@nestjs/common';
import { MongoConnectionModule } from './core/mongo-connection.module';

import { PermissionModule } from './permissions/permissions.module';
import { RoleModule } from './roles/role.module';
import { UserModule } from './users/user.module';
import { VideoModule } from './videos/video.module';

@Module({
  imports: [
    MongoConnectionModule,
    PermissionModule,
    RoleModule,
    UserModule,
    VideoModule,
  ],
})
export class AppModule { }
