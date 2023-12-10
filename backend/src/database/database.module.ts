import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./user.entity";
import { UserService } from "./user.service";
import { Session } from "./session.entity";
import { Friend } from "./friend.entity";
import { FriendRequest } from "./friendRequest.entity";
import { BlockedUser } from "./blockedUser.entity";
import { BlockedUserService } from "./blockedUser.service";
import { Game } from "./game.entity";
import { GameInvite } from "./gameInvite.entity";
import { Channel } from "./channel.entity";
import { ChannelService } from "./channel.service";
import { ChannelOwner } from "./channelOwner.entity";
import { ChannelUser } from "./channelUser.entity";
import { Message } from "./message.entity";
import { ChannelInvite } from "./channelInvite.entity";
import { FriendService } from "./friend.service";

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
        }),
        TypeOrmModule.forFeature([
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
            ChannelInvite])
    ],
    providers: [UserService, ChannelService, BlockedUserService, FriendService],
    controllers: [],
    exports: [UserService, ChannelService, BlockedUserService, FriendService]
})
export class DBModule {}
