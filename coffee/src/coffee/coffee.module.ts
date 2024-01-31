import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { Coffee } from 'src/coffee/model/coffee.entity';
import { CoffeeRepository } from './coffee.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesModule } from 'src/recipes/recipes.module';
import { Recipe } from 'src/recipes/model/recipe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, CoffeeRepository]),
    RecipesModule
  ],
  exports:[CoffeeService],
  providers: [CoffeeService,CoffeeRepository,Recipe],
  controllers: [CoffeeController]
})
export class CoffeeModule {}
