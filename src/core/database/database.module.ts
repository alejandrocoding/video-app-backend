import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const host = process.env.HOST || 'ds129051.mlab.com';
const port = Number(process.env.DBPORT) || 29051;
const username = process.env.USERDB || 'alexdb1';
const password = process.env.PASSDB || 'alexdb1';
const database = process.env.DBNAME || 'videoapp';

@Module({
    imports: [MongooseModule.forRoot(`mongodb://${username}:${password}@${host}:${port}/${database}`)],
    exports: [DatabaseModule],
})
export class DatabaseModule { }