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
        userId: '3',
        startDate: '01/01/2023',
        endDate: '01/01/2024'
      },
      {
        spotId: '2',
        userId: '3',
        startDate: '02/02/2023',
        endDate: '02/02/2024'
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
