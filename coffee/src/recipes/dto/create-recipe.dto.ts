import { AutoMap } from "@automapper/classes";
import { CoffeeDto } from "src/coffee/dto/coffee.dto";

export class CreateRecipeDto{
    @AutoMap()
    name:string;

    @AutoMap()
    content: string;

    @AutoMap()
    coffeeId: string;

}