import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { typeOrmConfig } from './config/typeorm.config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    CoffeeModule, 
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }), 
    RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
