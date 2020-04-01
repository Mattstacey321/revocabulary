"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const mongoose_1 = require("mongoose");
const WordResolvers_1 = require("./Word/resolvers/WordResolvers");
const UserResolver_1 = require("./User/resolver/UserResolver");
const main = async () => {
    const schema = await type_graphql_1.buildSchema({
        resolvers: [WordResolvers_1.WordResolver, UserResolver_1.UserResolver],
        emitSchemaFile: true,
        nullableByDefault: true,
        validate: false,
    });
    const mongoose = await mongoose_1.connect("mongodb+srv://mattstacey:hoanglee1998@cluster0-884rq.gcp.mongodb.net/revocabulary?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.Promise = global.Promise;
    await mongoose.connection;
    const server = new apollo_server_express_1.ApolloServer({ schema, debug: true, introspection: true, playground: true });
    const app = express_1.default();
    server.applyMiddleware({ app: app });
    app.listen({ port: 3333 }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`));
};
main().catch((error) => {
    console.log(error, 'error');
});
//# sourceMappingURL=server.js.map