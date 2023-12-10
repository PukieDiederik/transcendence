import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    JoinColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity("FriendRequest")
export class FriendRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "sender_id" })
    sender: User;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "recipient_id" })
    recipient: User;

    @Column({ type: "timestamptz" })
    expires_at: Date;
}
