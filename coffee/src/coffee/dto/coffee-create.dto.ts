import { AutoMap } from "@automapper/classes";

export class CreateCoffeeDto{
    @AutoMap()
    name:string;
}