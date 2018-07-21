import * as mongoose from 'mongoose';

const host = process.env.HOST || 'ds129051.mlab.com';
const port = Number(process.env.PORT) || 29051;
const username = process.env.USERDB || 'alexdb1';
const password = process.env.PASSDB || 'alexdb1';
const database = process.env.DBNAME || 'videoapp';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`),
  },
];