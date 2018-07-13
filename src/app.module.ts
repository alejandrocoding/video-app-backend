import { Module } from '@nestjs/common';
import { MongoConnectionModule } from './core/mongo-connection.module';

import { AppController } from './app.controller';

import { RoleModule } from './roles/role.module';
import { PermissionModule } from './permissions/permission.module';
import { VideoModule } from './video/video.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongoConnectionModule,
    RoleModule,
    PermissionModule,
    VideoModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
