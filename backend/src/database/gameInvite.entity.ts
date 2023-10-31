import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { User } from "./user.entity";

@Entity("GameInvite")
export class GameInvite{
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "sender_id" })
    sender: User;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "recipient_id" })
    recipient: User;

    @Column({type: 'timestamptz'})
    expires_at: Date;
}