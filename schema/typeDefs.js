// schema/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar DateTime
    type Trip {
        id: ID!
        country: String!
        place: String!
        price: Float!
        date: DateTime!
        createdAt: DateTime
        updatedAt: DateTime
    }

    type Query {
        getTrip(id: ID!): Trip
        getTrips: [Trip]
    }

    type Mutation {
        addTrip(country: String!, place: String!, price: Float!, date: DateTime!): Trip
        updateTrip(id: ID!, country: String!, place: String!, price: Float!, date: DateTime!): Trip
        deleteTrip(id: ID!): String
    }
`;

module.exports = typeDefs;
