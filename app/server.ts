import { ApolloServer } from "apollo-server-express";
import Express = require("express");
import * as dotenv from "dotenv";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import { WordResolver } from "./Word/resolvers/WordResolvers";
import { UserResolver } from "./User/resolver/UserResolver";
dotenv.config();

const main = async () => {
    const schema = await buildSchema({

        resolvers: [WordResolver, UserResolver],
        emitSchemaFile: true,
        nullableByDefault: true,
        validate: false,
    });

    // create mongoose connection
    const mongoose = await connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.Promise = global.Promise;
    await mongoose.connection;


    const server = new ApolloServer({ schema, debug: true, introspection: true, playground: true });
    const app = Express();
    server.applyMiddleware({ app: app as any });
    const port = process.env.PORT || 8000;
    app.listen({ port: port }, () =>
        console.log(`🚀 Server ready and listening at ==> http://localhost:${port}${server.graphqlPath}`))
};
main().catch((error) => {
    console.log(error, 'error');
})