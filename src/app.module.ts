import { Module } from '@nestjs/common';
import { MongoConnectionModule } from './core/mongo-connection.module';

import { PermissionModule } from '@permissions/permissions.module';
import { RolesModule } from '@roles/roles.module';
import { UsersModule } from '@users/users.module';
import { VideosModule } from '@videos/videos.module';

@Module({
  imports: [
    MongoConnectionModule,
    PermissionModule,
    RolesModule,
    UsersModule,
    VideosModule,
  ],
})
export class AppModule { }
