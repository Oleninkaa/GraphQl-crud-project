// schema/resolvers.js
const Item = require('../models/Item');

const resolvers = {
  Query: {
    getItem: async (_, { id }) => await Item.findById(id),
    getItems: async () => await Item.find(),
  },
  Mutation: {
    addItem: async (_, { country, place, price, date }) => {
      const item = new Item({ country, place, price, date });
      return await item.save();
    },
    updateItem: async (_, { id, country, place, price, date }) => {
      return await Item.findByIdAndUpdate(
        id,
        { country, place, price, date},
        { new: true }
      );
    },
    deleteItem: async (_, { id }) => {
      await Item.findByIdAndDelete(id);
      return `Item with ID ${id} deleted`;
    },
  },
};

module.exports = resolvers;
