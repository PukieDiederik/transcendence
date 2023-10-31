import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./user.entity";
import { Session } from "./session.entity";
import { Friend } from "./friend.entity";
import { FriendRequest } from "./friendRequest.entity";
import { BlockedUser } from "./blockedUser.entity";
import { Game } from "./game.entity";
import { GameInvite } from "./gameInvite.entity";
import { ChannelOwner } from "./channelOwner.entity";
import { Channel } from "./channel.entity";
import { ChannelUser } from "./channelUser.entity";
import { Message } from "./message.entity";
import { ChannelInvite } from "./channelInvite.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            entities: [
                User,
                Session,
                Friend,
                FriendRequest,
                BlockedUser,
                Game,
                GameInvite,
                Channel,
                ChannelOwner,
                ChannelUser,
                Message,
                ChannelInvite
            ],
            synchronize: true
        })
    ],
    controllers: [],
    providers: []
})
export class DBModule {}
