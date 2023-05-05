import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { ConfigTypes } from 'src/types/ConfigTypes';

const dbConfig = config.get<ConfigTypes>('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [__dirname, 'dist/*/entity/*.entity.{ts,js}'],
  synchronize: true,
  timezone: '+09:00',
  logging: true,
};
