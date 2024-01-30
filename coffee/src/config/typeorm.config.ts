import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Coffee } from "src/coffee/model/coffee.entity";

export const typeOrmConfig : TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'admin1234',
    database: 'coffee-break',
    entities: [Coffee],
    synchronize: true,
}
