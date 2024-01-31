import { Recipe } from "src/recipes/model/recipe.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Coffee{
  
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Unique(["name"])
    @Column()
    name:string;

    @OneToOne(() => Recipe, (recipe)=> recipe.coffee)
    @JoinColumn()
    recipe: Recipe

    coffeeId:string;
}