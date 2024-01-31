import { Injectable } from '@nestjs/common';
import { RecipeRepository } from './recipes.repository';
import { Recipe } from './model/recipe.entity';
import { RecipeDto } from './dto/recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { CoffeeRepository } from 'src/coffee/coffee.repository';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class RecipesService {
    constructor(private readonly recipeRepository: RecipeRepository,
        private readonly coffeeRepository :CoffeeRepository
        ) {}

    // async getAllRecipes(): Promise<RecipeDto[]> {
    //     const entities: Recipe[] = await this.recipeRepository.find();
    //     const results: RecipeDto[] = await this.classMapper.mapArrayAsync(entities,Recipe,RecipeDto);

    //     return results;
    // }
    // getRecipeById() { }

    // async createRecipe(recipeDto :CreateRecipeDto): Promise<RecipeDto> { 
    //     const entity :Recipe = this.classMapper.map(recipeDto, CreateRecipeDto, Recipe);
    //     const createdEntity :Recipe = this.recipeRepository.create(entity);

        
    //     this.recipeRepository.save(createdEntity);
    //     const result :RecipeDto = instanceToPlain(RecipeDto,createdEntity);

    //     return result;
    // }

    updateRecipe() { }
    deleteRecipe() { }
}
