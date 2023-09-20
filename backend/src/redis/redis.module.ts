/*
import { ConfigService } from "@nestjs/config";

@Module ({
    imports: [
        CacheModule.registerAsync({
            useFactory: async (configService: ConfigService) => ({
                store: await redisStore({
                    url: configService.get('REDIS_URI'),
                    ttl: 5000,
                }),
            }),
            isGlobal: true,
            inject: [ConfigService]
        }),
    ],
    providers: [RedisService],
    export: [RedisService]
})*/