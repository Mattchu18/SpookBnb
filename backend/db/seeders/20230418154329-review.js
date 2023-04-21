'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        spotId: '1',
        userId: '2',
        review: 'Best review of all reviews for this spotId of 1!',
        stars: '5',
      },
      {
        spotId: '1',
        userId: '3',
        review: 'Worst review of all reviews for this spotId of 2! He is my competitor!',
        stars: '1',
      },
      {
        spotId: '1',
        userId: '4',
        review: 'i Like it!',
        stars: '3',
      },
      {
        spotId: '2',
        userId: '1',
        review: 'Worst place! He is my competitor!',
        stars: '1',
      },
      {
        spotId: '2',
        userId: '3',
        review: 'It aight.',
        stars: '4',
      },
      {
        spotId: '2',
        userId: '4',
        review: 'WoW!!!',
        stars: '5',
      },
      {
        spotId: '3',
        userId: '1',
        review: 'GREAT!!!',
        stars: '5',
      },
      {
        spotId: '3',
        userId: '2',
        review: 'MEH!!!',
        stars: '1',
      },
      {
        spotId: '3',
        userId: '4',
        review: 'WoWZA!!!',
        stars: '5',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: ['1','3'] }
    }, {});
  }
};
