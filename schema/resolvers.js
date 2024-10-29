const Trip = require('../models/Trips');

const resolvers = {
  Query: {
    getTrip: async (_, { id }) => await Trip.findById(id),
    getTrips: async () => await Trip.find(),
  },
  Mutation: {
    addTrip: async (_, { country, place, price, date }) => {
      const trip = new Trip({ country, place, price, date });
      return await trip.save();
    },
    updateTrip: async (_, { id, country, place, price, date }) => {
      return await Trip.findByIdAndUpdate(
        id,
        { country, place, price, date},
        { new: true }
      );
    },
    deleteTrip: async (_, { id }) => {
      await Trip.findByIdAndDelete(id);
      return `Trip with ID ${id} deleted`;
    },
  },
};

module.exports = resolvers;
