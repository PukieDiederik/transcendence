import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum statusType {
    ONLINE = "online",
    OFFLINE = "offline",
    INGAME = "in-game"
}

@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int", unique: true })
    intra_id: number;

    @Column({ type: "varchar", length: 32, unique: true })
    username: string;

    // TODO: setup default
    // TODO: setup more accurate constraints for base 64 encoded string
    @Column({ type: "varchar" })
    profile_image: string;

    @Column({
        type: "enum",
        enum: ["online", "offline", "in-game"],
        default: "offline"
    })
    status: statusType;

    @Column({ type: "timestamptz" })
    last_online: Date;

    @Column({ type: "int", default: 0 })
    comp_level: number;

    @Column({ type: "boolean", default: false })
    has_totp: boolean;
}
