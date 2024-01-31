import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Coffee } from "src/coffee/model/coffee.entity";
import { Recipe } from "src/recipes/model/recipe.entity";

export const typeOrmConfig : TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'admin1234',
    database: 'coffee-break',
    entities: [Coffee,Recipe],
    synchronize: true,
}
