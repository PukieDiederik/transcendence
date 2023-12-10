import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService{
    constructor( @InjectRepository(User) private rep: Repository<User>) {}

    create(intra_id : number, username: string, profile_image : string) : Promise<User> {
        const cur_time = Date.now();
        const user = this.rep.create({intra_id : intra_id, username : username, profile_image : profile_image, last_online: cur_time});
        return this.rep.save(user);
    }

    findById(id : number) : Promise<User> {
        return this.rep.findOneBy({id : id})
    }

    findByIntraId(id : number) : Promise<User> {
        return this.rep.findOneBy({intra_id : id})
    }
}