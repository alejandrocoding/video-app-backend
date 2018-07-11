import { Module } from '@nestjs/common';

import { MongoConnectionModule } from './core/mongo-connection.module';
import { AppController } from './app.controller';
import { RoleModule } from './role/role.module';

@Module({
  imports: [MongoConnectionModule, RoleModule],
  controllers: [AppController],
})
export class AppModule { }
