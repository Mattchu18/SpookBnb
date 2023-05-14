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
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house1.png',
        preview: 'true',
      },
      {
        spotId: '1',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house2.png',
        preview: 'false',
      },
      {
        spotId: '1',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house3.png',
        preview: 'false',
      },
      {
        spotId: '1',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house4.png',
        preview: 'false',
      },
      {
        spotId: '1',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house4.png',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house5.png',
        preview: 'true',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house6.png',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house7.png',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house8.png',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house8.png',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house9.png',
        preview: 'true',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house10.png',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house11.png',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house12.png',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house12.png',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house13.png',
        preview: 'true',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house14.png',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house15.png',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house15.png',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house16.png',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house1.png',
        preview: 'true',
      },
      {
        spotId: '5',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house2.png',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house3.png',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house4.png',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house4.png',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house5.png',
        preview: 'true',
      },
      {
        spotId: '6',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house6.png',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house7.png',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house8.png',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house9.png',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house10.png',
        preview: 'true',
      },
      {
        spotId: '7',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house11.png',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house12.png',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house13.png',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house14.png',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house15.png',
        preview: 'true',
      },
      {
        spotId: '8',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house16.png',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house17.png',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house18.png',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house18.png',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house9.png',
        preview: 'true',
      },
      {
        spotId: '9',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house10.png',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house11.png',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house12.png',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house13.png',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house14.png',
        preview: 'true',
      },
      {
        spotId: '10',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house15.png',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house16.png',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house17.png',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house18.png',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house19.png',
        preview: 'true',
      },
      {
        spotId: '11',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house20.png',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house21.png',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house22.png',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house23.png',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house24.png',
        preview: 'true',
      },
      {
        spotId: '12',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house25.png',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house26.png',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house27.png',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house28.png',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house1.png',
        preview: 'true',
      },
      {
        spotId: '13',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house2.png',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house3.png',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house4.png',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house5.png',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house6.png',
        preview: 'true',
      },
      {
        spotId: '14',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house7.png',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house8.png',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house9.png',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house10.png',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house11.png',
        preview: 'true',
      },
      {
        spotId: '15',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house12.png',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house13.png',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house14.png',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house15.png',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house16.png',
        preview: 'true',
      },
      {
        spotId: '16',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house17.png',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house18.png',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house19.png',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house19.png',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house12.png',
        preview: 'true',
      },
      {
        spotId: '17',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house13.png',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house14.png',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house15.png',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house16.png',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house17.png',
        preview: 'true',
      },
      {
        spotId: '18',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house18.png',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house19.png',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house20.png',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house21.png',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house22.png',
        preview: 'true',
      },
      {
        spotId: '19',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house23.png',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house24.png',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house25.png',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house26.png',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house27.png',
        preview: 'true',
      },
      {
        spotId: '20',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house28.png',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house29.png',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house30.png',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://astrogram.s3.us-east-2.amazonaws.com/house31.png',
        preview: 'false',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: ['1', '2', '3', '4'] }
    }, {});
  }
};
