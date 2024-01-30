import { AutoMap } from "@automapper/classes";

export class CoffeeDto{
    @AutoMap()
    int: string;

    @AutoMap()
    name: string;
}