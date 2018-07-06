import { Module } from '@nestjs/common';
import { MongoConnectionModule } from 'core/mongo-connection.module';

@Module({
  imports: [MongoConnectionModule],
})
export class AppModule { }
