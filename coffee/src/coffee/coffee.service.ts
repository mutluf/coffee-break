import { Injectable, NotFoundException } from '@nestjs/common';
import { CoffeeRepository } from './coffee.repository';
import { CoffeeDto } from './dto/coffee.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Coffee } from 'src/coffee/model/coffee.entity';
import { CreateCoffeeDto } from './dto/coffee-create.dto';
import { UpdateCoffeeDto } from './dto/coffee-update.dto';

@Injectable()
export class CoffeeService {
    constructor(
        private readonly coffeeRepository: CoffeeRepository,

        @InjectMapper()
        private readonly classMapper: Mapper,
    ) { }

    async getAll(): Promise<CoffeeDto[]> {
        const coffees = await this.coffeeRepository.find();

        const results: CoffeeDto[] = await this.classMapper.mapArrayAsync(coffees, Coffee, CoffeeDto)
        return results;
    }


    async createCoffee(coffeeDto: CreateCoffeeDto): Promise<CoffeeDto> {
        const entity: Coffee = await this.classMapper.mapAsync(coffeeDto, CreateCoffeeDto, Coffee)
        const createdEntity: Coffee = this.coffeeRepository.create(entity);
        this.coffeeRepository.save(createdEntity);

        return this.classMapper.map(createdEntity, Coffee, CoffeeDto);

    }

    // map()
    // const dto = mapper.map(user, User, UserDto);

    // // mutate()
    // let dto = {};
    // mapper.mutate(user, dto, User, UserDto);

    async updateCoffee(id: string, coffeeDto: UpdateCoffeeDto): Promise<CoffeeDto> {

        const entity: Coffee = await this.coffeeRepository.findOneBy({ id: id })

        //coffeeDto source, entity destination
        this.classMapper.mutate(coffeeDto,entity,UpdateCoffeeDto , Coffee);

        this.coffeeRepository.save(entity)
        return this.classMapper.map(entity, Coffee, CoffeeDto);
    }

    async getCoffeeById(id: string): Promise<CoffeeDto> {
        const entity = await this.coffeeRepository.findOneBy({ id: id });

        if (!entity) {
            throw new NotFoundException(`Coffee with ID ${id} not found`);
        }
        else {
            return await this.classMapper.mapAsync(entity, Coffee, CoffeeDto)
        }

    }

    async deleteCoffee(id: string): Promise<void> {
        const result = await this.coffeeRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`User with ID "${id}" not found`)
        }
    }
}
