import { AutoMap } from "@automapper/classes";
import { Recipe } from "src/recipes/model/recipe.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Coffee{
    @AutoMap()
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @AutoMap()
    @Unique(["name"])
    @Column()
    name:string;

    @AutoMap(()=>Recipe)
    @OneToOne(() => Recipe, (recipe)=> recipe.coffee)
    @JoinColumn()
    recipe: Recipe

    @AutoMap()
    coffeeId:string;
}