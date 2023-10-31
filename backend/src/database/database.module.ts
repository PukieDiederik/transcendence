import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./user.entity";
import { Session } from "./session.entity";
import { Friend } from "./friend.entity";
import { FriendRequest } from "./friendRequest.entity";
import { BlockedUser } from "./blockedUser.entity";
import { Game } from "./game.entity";
import { GameInvite } from "./gameInvite.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            entities: [User, Session, Friend, FriendRequest, BlockedUser, Game, GameInvite],
            synchronize: true
        })
    ],
    controllers: [],
    providers: []
})
export class DBModule {}
