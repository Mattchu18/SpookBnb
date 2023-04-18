'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: '1',
        address: '1234 Test Way',
        city: 'Test City',
        state: 'CA',
        country: 'USA',
        lat: '1.2345',
        lng: '1.2345',
        name: 'Beautiful spot near Test City!',
        description: 'The most beautifulest spot that has more beautiful spots around.',
        price: '$500'
      },
      {
        ownerId: '2',
        address: '54321 Test Way',
        city: 'Test City',
        state: 'CA',
        country: 'USA',
        lat: '1.2345',
        lng: '1.2345',
        name: 'Beautiful spot near Test City!',
        description: 'The most beautifulest spot that has more beautiful spots around.',
        price: '$500'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: { [Op.in]: ['1234 Test Way','54321 Test Way'] }
    }, {});
  }
};
