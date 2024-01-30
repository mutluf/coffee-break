import { Injectable } from "@nestjs/common";
import { Coffee } from "src/coffee/model/coffee.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CoffeeRepository extends Repository<Coffee>{
    constructor(private dataSource : DataSource){
        super(Coffee, dataSource.createEntityManager())
    }
}