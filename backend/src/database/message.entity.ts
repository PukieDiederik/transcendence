import {
    Entity,
    JoinColumn,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
} from "typeorm";
import { ChannelUser } from "./channelUser.entity";

@Entity("Message")
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 512 })
    text: string;

    @CreateDateColumn({ type: "timestamptz" })
    sent_at: Date;

    @ManyToOne(() => ChannelUser, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "author_id" })
    author_id: ChannelUser;
}
