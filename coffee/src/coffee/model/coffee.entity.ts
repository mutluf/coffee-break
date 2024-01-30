import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Coffee{
    @AutoMap()
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @AutoMap()
    @Unique(["name"])
    @Column()
    name:string;
}