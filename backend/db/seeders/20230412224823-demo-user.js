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
        firstName: 'user1',
        lastName: 'user1',
        username: 'user1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user2.com',
        firstName: 'user2',
        lastName: 'user2',
        username: 'user2',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user3@user3.com',
        firstName: 'user3',
        lastName: 'user3',
        username: 'User3',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user4@user4.com',
        firstName: 'user4',
        lastName: 'user4',
        username: 'user4',
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
