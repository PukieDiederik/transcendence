import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Channel } from "./channel.entity";

@Injectable()
export class ChannelService{
    constructor( @InjectRepository(Channel) private rep: Repository<Channel>) {}

    create(name : string, is_public: boolean) : Promise<Channel> {
        const c = this.rep.create({ name: name, is_public: is_public});
        return this.rep.save(c);
    }

    // TODO: create overload using an owner
    // TODO: create overload using a password for public rooms

    // Find functions
    findPublic() : Promise<Channel[]>{
        return this.rep.findBy({is_public: true});
    }
    findById(id : number) : Promise<Channel> {
        return this.rep.findOneBy({id : id});
    }

    // TODO: add functions for getting messages, creating messages, owner etc.
    // TODO: add functions for channel invites
}