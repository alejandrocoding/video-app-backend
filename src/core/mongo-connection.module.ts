import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: 'ds129051.mlab.com',
            port: 29051,
            username: 'alexdb1',
            password: 'alexdb1',
            database: 'videoapp',
            entities: [__dirname + '/../**/*.entity.ts'],
            synchronize: true,
        }),
    ],
    exports: [MongoConnectionModule],
})
export class MongoConnectionModule { }