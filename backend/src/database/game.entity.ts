import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { User } from "./user.entity";

export enum gameStatus {
    ONGOING = 'ongoing',
    FINISHED = 'finished'
}

export enum gameType {
    NORMAL = 'normal'
}

@Entity("Game")
export class Game{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int'})
    score: number;

    @Column({ type: "enum", enum: ["ongoing", "finished"], default: "ongoing" })
    status: gameStatus;


    @ManyToOne(() => User, { eager: true, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: "user1_id" })
    user1: User;

    @ManyToOne(() => User, { eager: true, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: "user2_id" })
    user2: User;

    @Column({type: 'timestamptz'})
    time_started : Date;

    @Column({type: 'timestamptz'})
    time_finished : Date;

    @Column({
        type: "enum",
        enum: ['normal'],
        default: 'normal'
    })
    game_type : gameType;
}

