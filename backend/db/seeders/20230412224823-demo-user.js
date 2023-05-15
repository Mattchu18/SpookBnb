'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        email: 'user1@user1.com',
        firstName: 'Joseph',
        lastName: 'Yeet',
        username: 'YeetMeister',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user2.com',
        firstName: 'Mark',
        lastName: 'Hamon',
        username: 'EdgeLord',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user3@user3.com',
        firstName: 'Amanda',
        lastName: 'Bissle',
        username: 'Bissel',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user4@user4.com',
        firstName: 'Felice',
        lastName: 'Navidad',
        username: 'ChristmasLuver',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user5@user5.com',
        firstName: 'Harry',
        lastName: 'Styel',
        username: 'Popstar',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo@demo.com',
        firstName: 'demo',
        lastName: 'demo',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['user1', 'user2', 'user3', 'user4'] }
    }, {});
  }
};
