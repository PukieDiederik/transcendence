import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { BlockedUser } from "./blockedUser.entity";

@Injectable()
export class BlockedUserService{
    constructor( @InjectRepository(BlockedUser) private rep: Repository<BlockedUser>) {}

    create(blocker: User, target : User) : Promise<BlockedUser> {
        const bu = this.rep.create({ blocker: blocker, target: target});
        return this.rep.save(bu);
    }

    find(blocker: User, target : User) : Promise<BlockedUser> {
        return this.rep.findOneBy({blocker: blocker, target: target});
    }

    async isBlocked(blocker : User, target: User) : Promise<boolean> {
        const user = await this.rep.findOneBy({blocker: blocker, target: target});
        return !!user;
    }
}