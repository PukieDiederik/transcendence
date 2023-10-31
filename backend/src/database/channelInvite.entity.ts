import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn, CreateDateColumn} from "typeorm";
import { User } from "./user.entity";
import { Channel } from "./channel.entity";

@Entity("ChannelInvite")
export class ChannelInvite{
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => User, {eager: true, onDelete: "CASCADE"})
    @JoinColumn({name: 'sender_id'})
    sender_id: User;

    @ManyToOne(() => User, {eager: true, onDelete: "CASCADE"})
    @JoinColumn({name: 'recipient_id'})
    recipient_id: User;

    @ManyToOne(() => Channel, {eager: true, onDelete: "CASCADE"})
    @JoinColumn({name: 'channel_id'})
    channel_id: Channel;


    @CreateDateColumn({type: "timestamptz"})
    created_at : Date;

    @Column({type:'timestamptz'})
    expires_at : Date;
}