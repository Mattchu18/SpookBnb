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
        address: '1 Spot User Way',
        city: 'Test City',
        state: 'CA',
        country: 'USA',
        lat: '1.2345',
        lng: '1.2345',
        name: 'Beautiful spot near Test City!',
        description: 'The most beautifulest spot that has more beautiful spots around.',
        price: '10'
      },
      {
        ownerId: '2',
        address: '2 Spot User Way',
        city: 'Test City',
        state: 'CA',
        country: 'USA',
        lat: '11.2345',
        lng: '5.2345',
        name: 'Beautiful spot near Test City!',
        description: 'The most beautifulest spot that has more beautiful spots around.',
        price: '200'
      },
      {
        ownerId: '3',
        address: '3 Spot User Way',
        city: 'Test City',
        state: 'CA',
        country: 'USA',
        lat: '11.2345',
        lng: '13.2345',
        name: 'Beautiful spot near Test City!',
        description: 'The most beautifulest spot that has more beautiful spots around.',
        price: '500'
      },
      {
        ownerId: '4',
        address: '4 Spot User Way',
        city: 'Test City',
        state: 'CA',
        country: 'USA',
        lat: '11.2345',
        lng: '0.2345',
        name: 'Beautiful spot near Test City!',
        description: 'The most beautifulest spot that has more beautiful spots around.',
        price: '999'
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
