import { Module } from '@nestjs/common';
import { MongoConnectionModule } from './core/mongo-connection.module';

import { AppController } from './app.controller';

import { PermissionModule } from './permissions/permission.module';
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
  controllers: [AppController],
})
export class AppModule { }
