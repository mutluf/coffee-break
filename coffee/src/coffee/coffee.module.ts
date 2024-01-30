import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { Coffee } from 'src/coffee/model/coffee.entity';
import { CoffeeMappingProfile } from './profile/automapper.profile';
import { CoffeeRepository } from './coffee.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, CoffeeRepository])
  ],
  exports:[CoffeeService],
  providers: [CoffeeService,CoffeeMappingProfile,CoffeeRepository],
  controllers: [CoffeeController]
})
export class CoffeeModule {}
