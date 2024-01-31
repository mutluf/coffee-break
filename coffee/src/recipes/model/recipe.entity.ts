import { AutoMap } from "@automapper/classes";
import { Coffee } from "src/coffee/model/coffee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipe{
    @AutoMap()
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @AutoMap()
    @Column()
    name: string;

    @AutoMap()
    @Column()
    content: string;

    @AutoMap(()=>[Coffee])
    @OneToOne(() => Coffee, (coffee) => coffee.recipe)
    @JoinColumn()   
    coffee: Coffee;

    // @AutoMap()
    // @Column({
    //     nullable:true
    // })
    // coffeeId:string;
}