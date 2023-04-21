'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
      {
        spotId: '1',
        userId: '2',
        startDate: new Date('2020-01-01'),
        endDate: new Date('2020-01-02')
      },
      {
        spotId: '1',
        userId: '3',
        startDate: new Date('2023-05-01'),
        endDate: new Date('2023-05-02')
      },
      {
        spotId: '1',
        userId: '4',
        startDate: new Date('2023-06-01'),
        endDate: new Date('2023-06-02')
      },
      {
        spotId: '2',
        userId: '1',
        startDate: new Date('2001-01-01'),
        endDate: new Date('2001-01-02')
      },
      {
        spotId: '2',
        userId: '3',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-02')
      },
      {
        spotId: '2',
        userId: '4',
        startDate: new Date('2024-01-03'),
        endDate: new Date('2024-01-04')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: ['3'] }
    }, {});
  }
};
