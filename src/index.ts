import express from "express";
import {graphqlHTTP} from "express-graphql";
import {schema} from './Schema'
import cors from "cors";
import { DataSource } from "typeorm";
import {provider} from './Entities/providers'
import {providerservices} from './Entities/providerservices'

const main = async () => {
     const AppDataSource = new DataSource ({
        type: "mysql",
        host:"myqs-db.cs3cgaoj1mag.us-west-2.rds.amazonaws.com",
        database: "cloudservices",
        username:  "admin" ,
        password: "K8UHYegC2detvThk",
        logging: true,
        synchronize: false,
        entities: [provider,providerservices],
    });

    AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, ()=> {
        console.log("SERVER RUNNING ON PORT 3001");
    });
};

main().catch((err) => {
    console.log(err);
});