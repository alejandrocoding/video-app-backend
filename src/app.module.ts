import { Module } from '@nestjs/common';
import { MongoConnectionModule } from 'core/mongo-connection.module';
import { AppController } from 'app.controller';

@Module({
  imports: [MongoConnectionModule],
  controllers: [AppController],
})
export class AppModule { }
