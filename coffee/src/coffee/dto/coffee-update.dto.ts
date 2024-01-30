import { AutoMap } from "@automapper/classes";

export class UpdateCoffeeDto{
    @AutoMap()
    name: string;
}