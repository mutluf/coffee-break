import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeDto } from './dto/recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Controller('recipes')
export class RecipesController {

    constructor(private readonly recipeService:RecipesService){}


        @Get()
        getAll():Promise<RecipeDto[]>{
            return this.recipeService.getAllRecipes();
        }

        @Post()
        create(@Body() recipeDto : CreateRecipeDto):Promise<RecipeDto>{
            return this.recipeService.createRecipe(recipeDto);
        }
    
}
