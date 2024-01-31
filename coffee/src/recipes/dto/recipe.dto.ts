import { AutoMap } from "@automapper/classes";
import { Coffee } from "src/coffee/model/coffee.entity";
import { OneToOne } from "typeorm";

export class RecipeDto{
    // @AutoMap()
    // id:string;

    @AutoMap()
    name: string;

    @AutoMap()
    content: string;

    // @AutoMap()
    // coffee:Coffee;
   
}