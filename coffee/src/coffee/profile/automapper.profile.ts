import { Mapper, MappingProfile, createMap } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { CoffeeDto } from "../dto/coffee.dto";
import { Coffee } from "src/coffee/model/coffee.entity";
import { CreateCoffeeDto } from "../dto/coffee-create.dto";
import { UpdateCoffeeDto } from "../dto/coffee-update.dto";

@Injectable()
export class CoffeeMappingProfile extends AutomapperProfile{
    

    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile():MappingProfile {
        return (mapper) => {
            createMap(mapper, Coffee, CoffeeDto);
            createMap(mapper,CreateCoffeeDto, Coffee);
            createMap(mapper,UpdateCoffeeDto,Coffee);
            createMap(mapper,Coffee,UpdateCoffeeDto);
        };
    }
    
   

}