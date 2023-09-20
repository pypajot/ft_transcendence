/*
import { Inject, Injectable, CACHE_MANAGER } from "@nestjs/common";

@Injectable()
export class RedisService {
    constructor(@Inject(CACHE_MANAGER) private readonly cache:
    Cache){}

    async get(key:string)
    {
        console.log(`Get ${key} from REDIS`);
        return await this.cache.get(key);
    }

    async set(key:string)
    {
        console.log(`Set ${key} from REDIS`);
        await this.cache.set(key, value);
    }

    async del(key:string)
    {
        console.log(`Delete ${key} from REDIS`);
        await this.cache.del(key);
    }
}*/