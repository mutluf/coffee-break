import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoffeeDto } from './dto/coffee.dto';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/coffee-create.dto';
import { UpdateCoffeeDto } from './dto/coffee-update.dto';

@Controller('coffees')
export class CoffeeController {
    constructor(private readonly coffeeService: CoffeeService) { }

    @Get()
    getAll(): Promise<CoffeeDto[]> {
        const coffees = this.coffeeService.getAll();
        return coffees;
    }

    @Post()
     create(@Body() coffeeDto: CreateCoffeeDto): Promise<CoffeeDto> {
        const result: Promise<CoffeeDto> =  this.coffeeService.createCoffee(coffeeDto);

        return result;
    }

    @Put(":id")
     update(@Body() coffeeDto: UpdateCoffeeDto,@Param('id') id:string): Promise<CoffeeDto> {
        const result: Promise<CoffeeDto> =  this.coffeeService.updateCoffee(id,coffeeDto);

        return result;
    }

    @Delete("/:id")
    delete(@Param('id') id:string): Promise<void> {
       return this.coffeeService.deleteCoffee(id);      
   }
}
