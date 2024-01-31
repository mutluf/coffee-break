import { Mapper, MappingProfile, createMap, forMember, mapWith } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Recipe } from "../model/recipe.entity";
import { RecipeDto } from "../dto/recipe.dto";
import { CreateRecipeDto } from "../dto/create-recipe.dto";

@Injectable()
export class RecipeMappingProfile extends AutomapperProfile{
    

    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile():MappingProfile {
        return (mapper) => {
            createMap(mapper, Recipe, RecipeDto);
            createMap(mapper,RecipeDto, Recipe);
            createMap(mapper,CreateRecipeDto,Recipe);
         
        };
    }
    
   

}