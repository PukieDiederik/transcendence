import { Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";

import { User } from "./user.entity";
import { Channel} from "./channel.entity";

@Entity("ChannelOwner")
export class ChannelOwner{
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => User, { eager: true, onDelete: 'RESTRICT' })
    @JoinColumn({ name: "owner_id" })
    owner : User;


    @OneToOne(() => Channel, {eager: true, onDelete: 'CASCADE'})
    @JoinColumn({name: 'channel_id'})
    channel: Channel;

}