'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: '1',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'true',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'true',
      },      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'true',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'true',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/070ecc196dcf48d8a77c10b60f866662.jpg',
        preview: 'false',
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: ['1','2', '3', '4'] }
    }, {});
  }
};
