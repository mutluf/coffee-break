import { Coffee } from "src/coffee/model/coffee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipe{

    @PrimaryGeneratedColumn("uuid")
    id:string;


    @Column()
    name: string;

    @Column()
    content: string;


    @OneToOne(() => Coffee, (coffee) => coffee.recipe)
    @JoinColumn()   
    coffee: Coffee;

}