import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MembersModule } from './members/members.module';
import { PostsModule } from './posts/posts.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
    imports: [
        ConfigModule.forRoot(),
        CacheModule.register<RedisClientOptions>({
            store: redisStore,
            host: 'localhost',
            port: '6379',
            ttl: 5,
        }),
        MembersModule,
        PostsModule,
    ],
    controllers: [AppController],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
        AppService,
    ],
})
export class AppModule {}
