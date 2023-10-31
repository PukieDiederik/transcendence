import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Channel } from "./channel.entity";

@Entity("ChannelUser")
export class ChannelUser{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type: 'boolean', default: false})
    is_admin: boolean;

    @Column({type: 'timestamptz'})
    last_viewed: Date

    @Column({type: 'boolean', default: false})
    is_banned: boolean;

    @Column({type: 'boolean', default: false})
    is_muted: boolean;

    @Column({type: 'timestamptz'})
    muted_until: Date;

    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    user_id : User;

    @ManyToOne(() => Channel, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({name: 'channel_id'})
    channel: Channel;
}