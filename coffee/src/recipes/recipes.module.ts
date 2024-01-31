import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { RecipeRepository } from './recipes.repository';
import { RecipeMappingProfile } from './profile/automapper.profile';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './model/recipe.entity';
import { CoffeeRepository } from 'src/coffee/coffee.repository';
import { Coffee } from 'src/coffee/model/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe, RecipeRepository]),],
  controllers: [RecipesController],
  providers: [RecipesService,RecipeRepository,RecipeMappingProfile,CoffeeRepository,Coffee]
})
export class RecipesModule {}
