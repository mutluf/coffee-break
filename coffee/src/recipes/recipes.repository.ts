import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Recipe } from "./model/recipe.entity";

@Injectable()
export class RecipeRepository extends Repository<Recipe>{
    constructor(private readonly dataSource: DataSource){
        super(Recipe,dataSource.createEntityManager());
    }
}