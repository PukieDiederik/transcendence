import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { User } from "./user.entity";
import { Friend } from "./friend.entity";
import { FriendRequest } from "./friendRequest.entity";

@Injectable()
export class FriendService{
    constructor( @InjectRepository(Friend) private rep: Repository<Friend>,
                 @InjectRepository(FriendRequest) private FRrep: Repository<FriendRequest>,) {}

    // Creation functions
    createFriend(user1: User, user2: User) : Promise<Friend> {
        const fs = this.rep.create({ user1: user1, user2 : user2});
        return this.rep.save(fs);
    }
    createFriendFromFR(fr : FriendRequest) : Promise<Friend>
    {
        const fs = this.rep.create({user1: fr.sender, user2: fr.recipient});
        this.FRrep.delete(fr);
        return this.rep.save(fs);
    }

    createFR(sender: User, recipient: User) : Promise<FriendRequest>{
        // TODO: implement env variable for FR timeout
        var ea : Date = new Date(Date.now());
        ea.setDate(ea.getDate() + 7);
        const fr = this.FRrep.create({sender : sender, recipient: recipient, expires_at: ea})
        return
    }

    // Deletion Functions
    deleteFriend(id : number | Friend) : Promise<DeleteResult>
    {
        return this.rep.delete(id);
    }
    deleteFriendReq(id : number | FriendRequest) : Promise<DeleteResult>{
        return this.FRrep.delete(id);
    }


    // Find functions
    findFriend(id : number) : Promise<Friend>{
        return this.rep.findOneBy({id: id});
    }
    findAllFriendsOfUser(u : User) : Promise<Friend[]>{
        return this.rep.findBy([{user1: u}, {user2: u}]);
    }

    findFR(id: number) : Promise<FriendRequest>{
        return this.FRrep.findOneBy({id: id});
    }
    // Returns all sent and recieved friend requests for a user
    findAllFR(u : User) : Promise<FriendRequest[]>{
        return this.FRrep.findBy([{sender: u}, {recipient: u}]);
    }
    // Returns all sent friend requests from a user
    findAllSentFR(u: User) : Promise<FriendRequest[]>{
        return this.FRrep.findBy({sender: u});
    }
    // Returns all recieved friend requests from a user
    findAllRecievedFR(u: User) : Promise<FriendRequest[]>{
        return this.FRrep.findBy({recipient: u});
    }
}