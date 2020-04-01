import { ApolloServer } from "apollo-server-express";
import Express = require("express");
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import { WordResolver } from "./Word/resolvers/WordResolvers";
import { UserResolver } from "./User/resolver/UserResolver";

const main = async () => {
    const schema = await buildSchema({

        resolvers: [WordResolver, UserResolver],
        emitSchemaFile: true,
        nullableByDefault: true,
        validate: false,
    });

    // create mongoose connection
    const mongoose = await connect("mongodb+srv://mattstacey:hoanglee1998@cluster0-884rq.gcp.mongodb.net/revocabulary?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.Promise = global.Promise;
    await mongoose.connection;


    const server = new ApolloServer({ schema, debug: true, introspection: true, playground: true });
    const app = Express();
    server.applyMiddleware({ app: app as any });
    app.listen({ port: 3333 }, () =>
        console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`))
};
main().catch((error) => {
    console.log(error, 'error');
})