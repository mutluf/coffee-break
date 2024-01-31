import { Injectable, NotFoundException } from '@nestjs/common';
import { CoffeeRepository } from './coffee.repository';
import { CoffeeDto } from './dto/coffee.dto';
import { Coffee } from 'src/coffee/model/coffee.entity';
import { CreateCoffeeDto } from './dto/coffee-create.dto';
import { UpdateCoffeeDto } from './dto/coffee-update.dto';
import {  instanceToInstance, instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class CoffeeService {
    constructor(
        private readonly coffeeRepository: CoffeeRepository,
    ) { }

    async getAll(): Promise<CoffeeDto[]> {
        const coffees = await this.coffeeRepository.find();

        const results: CoffeeDto[] = plainToInstance(CoffeeDto,coffees)
        return results;
    }


    async createCoffee(coffeeDto: CreateCoffeeDto): Promise<CoffeeDto> {
        const entity: Coffee = plainToInstance(Coffee,coffeeDto)
        const createdEntity: Coffee = this.coffeeRepository.create(entity);
        this.coffeeRepository.save(createdEntity);

        const result:CoffeeDto = instanceToInstance(createdEntity);
        return result;

    }


    async updateCoffee(id: string, coffeeDto: UpdateCoffeeDto): Promise<CoffeeDto> {

        const entity: Coffee = await this.coffeeRepository.findOneBy({ id: id })
        if(entity){
            entity.name=coffeeDto.name? coffeeDto.name : entity.name;
            this.coffeeRepository.save(entity);

            return entity;
            
        }
       
    }

    async getCoffeeById(id: string): Promise<CoffeeDto> {
        const entity :Coffee = await this.coffeeRepository.findOneBy({ id: id });

        if (!entity) {
            throw new NotFoundException(`Coffee with ID ${id} not found`);
        }
        else {
            const result :CoffeeDto = instanceToInstance(entity)
            return  result;
        }

    }

    async deleteCoffee(id: string): Promise<void> {
        const result = await this.coffeeRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`User with ID "${id}" not found`)
        }
    }
}
