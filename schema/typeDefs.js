// schema/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar DateTime
    type Item {
        id: ID!
        country: String!
        place: String!
        price: Float!
        date: DateTime!
    }

    type Query {
        getItem(id: ID!): Item
        getItems: [Item]
    }

    type Mutation {
        addItem(country: String!, place: String!, price: Float!, date: DateTime!): Item
        updateItem(id: ID!, country: String!, place: String!, price: Float!, date: DateTime!): Item
        deleteItem(id: ID!): String
    }
`;

module.exports = typeDefs;
