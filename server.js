const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
require('dotenv').config();

(async function () {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));

    app.listen({ port: process.env.PORT }, () =>
        console.log(`Server is running on http://localhost:${process.env.PORT}${server.graphqlPath}`)
    );
})();
