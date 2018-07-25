import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';

import { PermissionModule } from '@permissions/permissions.module';
import { RolesModule } from '@roles/roles.module';
import { UsersModule } from '@users/users.module';
import { VideosModule } from '@videos/videos.module';

@Module({
  imports: [
    DatabaseModule,
    PermissionModule,
    RolesModule,
    UsersModule,
    VideosModule,
  ],
})
export class AppModule { }
