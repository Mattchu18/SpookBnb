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
        firstName: 'User1',
        lastName: 'User1',
        username: 'User1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user.com',
        firstName: 'user2',
        lastName: 'user2',
        username: 'User2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user3@user.com',
        firstName: 'user3',
        lastName: 'user3',
        username: 'User3',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@user.com',
        firstName: 'user4',
        lastName: 'user4',
        username: 'User4',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
