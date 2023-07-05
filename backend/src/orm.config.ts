import { Module } from '@nestjs/common';
import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username:'usertest',
    password:'1234',
    port: 5432,
    host:'127.0.0.1',
    database:'ft_transcendence_db',
    synchronize: true,
    entities: [],
}
