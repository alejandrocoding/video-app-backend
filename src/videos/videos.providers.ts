import { Connection } from 'mongoose';
import { VideoSchema } from './schemas/video.schema';

export const videosProviders = [
    {
        provide: 'VideoModelToken',
        useFactory: (connection: Connection) => connection.model('Video', VideoSchema),
        inject: ['DbConnectionToken'],
    },
];