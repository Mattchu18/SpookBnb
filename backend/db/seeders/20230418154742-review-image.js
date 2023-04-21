'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'ReviewImages';
    return queryInterface.bulkInsert(options, [
      {
        reviewId: '1',
        url: 'reviewId1Website.com',
      },
      {
        reviewId: '2',
        url: 'reviewId2Website.com',
      },
      {
        reviewId: '3',
        url: 'reviewId3Website.com',
      },
      {
        reviewId: '4',
        url: 'reviewId4Website.com',
      },
      {
        reviewId: '5',
        url: 'reviewId5Website.com',
      },
      {
        reviewId: '6',
        url: 'reviewId6Website.com',
      },
      {
        reviewId: '7',
        url: 'reviewId7Website.com',
      },
      {
        reviewId: '8',
        url: 'reviewId8Website.com',
      },
      {
        reviewId: '9',
        url: 'reviewId9Website.com',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: ['1','2'] }
    }, {});
  }
};
