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
        address: '1 Spot Way',
        city: 'Anaheim',
        state: 'CA',
        country: 'USA',
        lat: '1.2345',
        lng: '1.2345',
        name: 'Beautiful spot near Los Angeles!',
        description: 'Escape to this hidden gem just outside of the bustling city of Los Angeles. The natural beauty of the surrounding area will leave you in awe. Hike to the nearby hilltop and take in breathtaking views of the city and the Pacific Ocean. Relax in a cozy cabin and enjoy a bonfire under the stars.',
        price: '10'
      },
      {
        ownerId: '2',
        address: '2 Spot Way',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: '11.2345',
        lng: '5.2345',
        name: 'Beautiful spot near Cupertino!',
        description: 'This spot is perfect for techies who want to be close to the action of Silicon Valley. Explore the nearby tech campuses and take a break in this cozy and luxurious retreat. The stunning views of the surrounding hills will provide a tranquil escape from the hustle and bustle of the city. Enjoy a glass of wine on the terrace and watch the sunset over the valley.',
        price: '200'
      },
      {
        ownerId: '3',
        address: '3 Spot Way',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: '11.2345',
        lng: '13.2345',
        name: 'Beautiful spot near the Bay Area!',
        description: 'This stunning spot is located just a short drive from the vibrant city of San Francisco. The natural beauty of the Bay Area is right at your doorstep, with hiking trails, beaches, and charming towns all nearby. Relax in a cozy cottage with a fireplace, or take a dip in the nearby hot springs. This spot is perfect for nature lovers and city adventurers alike.',
        price: '500'
      },
      {
        ownerId: '4',
        address: '4 Spot Way',
        city: 'San Mateo',
        state: 'CA',
        country: 'USA',
        lat: '11.2345',
        lng: '0.2345',
        name: 'Beautiful spot near Test City!',
        description: 'Located just outside of the charming city of San Mateo, this spot is perfect for a quiet and relaxing retreat. Take a stroll through the nearby parks and gardens, or explore the nearby art galleries and museums. Enjoy a glass of wine on the terrace and take in the stunning views of the surrounding hills. This spot is perfect for a romantic getaway or a solo escape from the hustle and bustle of the city.',
        price: '999'
      },
      {
        ownerId: '1',
        address: '5 Main Street',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        lat: '40.7128',
        lng: '-74.0060',
        name: 'Charming spot in the Big Apple',
        description: 'Experience the excitement of New York City from this cozy and comfortable spot in the heart of Manhattan. Walk to the nearby theaters and restaurants, or take a stroll through Central Park. Relax in a cozy apartment with a skyline view, or take in the sights and sounds of the city from the rooftop terrace. This spot is perfect for a city adventure with a touch of charm.',
        price: '150'
      },
      {
        ownerId: '3',
        address: '9 Ocean Drive',
        city: 'Honolulu',
        state: 'HI',
        country: 'USA',
        lat: '21.3069',
        lng: '-157.8583',
        name: 'Luxury Oceanfront Villa',
        description: 'Experience the ultimate in luxury and relaxation with this stunning oceanfront villa. From the infinity pool to the private beach, this property has everything you need for the perfect Hawaiian getaway.',
        price: '1000'
      },
      {
        ownerId: '4',
        address: '10 Mountain View',
        city: 'Denver',
        state: 'CO',
        country: 'USA',
        lat: '39.7392',
        lng: '-104.9903',
        name: 'Scenic Mountain Retreat',
        description: 'Escape the hustle and bustle of the city with this serene mountain retreat. Located in the heart of the Rockies, this property offers stunning views and easy access to outdoor activities like hiking, skiing, and more.',
        price: '300'
      },
      {
        ownerId: '1',
        address: '11 Lakefront Avenue',
        city: 'Chicago',
        state: 'IL',
        country: 'USA',
        lat: '41.8781',
        lng: '-87.6298',
        name: 'Lakefront Luxury',
        description: 'Enjoy stunning views of Lake Michigan and the Chicago skyline from this luxurious lakefront property. With easy access to the city and all it has to offer, this is the perfect place to relax and unwind after a long day of sightseeing.',
        price: '500'
      },
      {
        ownerId: '2',
        address: '12 Wine Country Drive',
        city: 'Napa',
        state: 'CA',
        country: 'USA',
        lat: '38.5025',
        lng: '-122.2654',
        name: 'Vineyard Retreat',
        description: 'Escape to wine country with this beautiful vineyard retreat. Surrounded by rolling hills and lush vineyards, this property offers the perfect blend of luxury and relaxation. With easy access to local wineries and restaurants, this is the ultimate Napa Valley experience.',
        price: '700'
      },
      {
        ownerId: '3',
        address: '13 Desert Oasis',
        city: 'Scottsdale',
        state: 'AZ',
        country: 'USA',
        lat: '33.4942',
        lng: '-111.9261',
        name: 'Luxury Desert Getaway',
        description: 'Experience the beauty of the Sonoran Desert with this luxurious desert getaway. With a private pool, stunning views, and easy access to golf courses and spas, this property has everything you need for the ultimate Scottsdale vacation.',
        price: '900'
      },
      {
        ownerId: '4',
        address: '14 Riverfront Road',
        city: 'New Orleans',
        state: 'LA',
        country: 'USA',
        lat: '29.9511',
        lng: '-90.0715',
        name: 'Charming French Quarter Condo',
        description: 'Experience the magic of New Orleans with this charming French Quarter condo. With easy access to world-famous restaurants, jazz clubs, and historic sites, this property is the perfect home base for your NOLA adventure.',
        price: '250'
      },
      {
        ownerId: '1',
        address: '15 Oceanfront Avenue',
        city: 'Miami',
        state: 'FL',
        country: 'USA',
        lat: '25.7617',
        lng: '-80.1918',
        name: 'Luxury Beach House',
        description: 'Experience the ultimate beach vacation with this luxurious oceanfront property. With breathtaking views of the Atlantic and easy access to local attractions and restaurants, this is the perfect place to unwind and relax.',
        price: '1200'
      },
      {
        ownerId: '2',
        address: '16 Mountain View Drive',
        city: 'Aspen',
        state: 'CO',
        country: 'USA',
        lat: '39.1911',
        lng: '-106.8175',
        name: 'Aspen Retreat',
        description: 'Escape to the mountains with this stunning Aspen retreat. With panoramic views of the Rocky Mountains and easy access to skiing and hiking trails, this property offers the perfect blend of luxury and adventure.',
        price: '1800'
      },
      {
        ownerId: '3',
        address: '17 Beachfront Road',
        city: 'Malibu',
        state: 'CA',
        country: 'USA',
        lat: '34.0259',
        lng: '-118.7798',
        name: 'Malibu Beach House',
        description: 'Experience the ultimate California beach vacation with this stunning Malibu beach house. With private access to the beach and easy access to local attractions and restaurants, this is the perfect place to relax and soak up the sun.',
        price: '1500'
      },
      {
        ownerId: '4',
        address: '18 Lakeside Lane',
        city: 'Lake Tahoe',
        state: 'CA',
        country: 'USA',
        lat: '39.0968',
        lng: '-120.0324',
        name: 'Lake Tahoe Retreat',
        description: 'Escape to the mountains with this stunning Lake Tahoe retreat. With panoramic views of the lake and easy access to skiing and hiking trails, this property offers the perfect blend of luxury and adventure.',
        price: '2000'
      },
      {
        ownerId: '1',
        address: '15 Mountain View Drive',
        city: 'Aspen',
        state: 'CO',
        country: 'USA',
        lat: '39.1911',
        lng: '-106.8175',
        name: 'Luxury Mountain Retreat',
        description: 'Escape to the mountains with this luxurious Aspen retreat. Surrounded by majestic peaks and breathtaking vistas, this property offers the perfect blend of adventure and relaxation. With easy access to ski resorts and hiking trails, this is the ultimate Colorado getaway.',
        price: '1200'
      },
      {
        ownerId: '2',
        address: '16 Beachfront Boulevard',
        city: 'Miami',
        state: 'FL',
        country: 'USA',
        lat: '25.7617',
        lng: '-80.1918',
        name: 'Oceanfront Paradise',
        description: 'Experience the ultimate beach vacation with this stunning oceanfront property in Miami. With direct access to the beach and easy access to local attractions, restaurants, and nightlife, this is the perfect place to relax and soak up the sun.',
        price: '900'
      },
      {
        ownerId: '3',
        address: '17 Lakeside Lane',
        city: 'Lake Tahoe',
        state: 'CA',
        country: 'USA',
        lat: '39.0968',
        lng: '-120.0324',
        name: 'Lakefront Getaway',
        description: 'Experience the beauty of Lake Tahoe with this stunning lakefront property. With a private dock and access to kayaks and paddleboards, this is the perfect place to enjoy all the water activities the lake has to offer. With easy access to hiking and skiing, this property has something for everyone.',
        price: '1500'
      },
      {
        ownerId: '4',
        address: '18 Historic District',
        city: 'Charleston',
        state: 'SC',
        country: 'USA',
        lat: '32.7765',
        lng: '-79.9311',
        name: 'Historic Charleston Home',
        description: 'Experience the charm and history of Charleston with this beautiful historic home. Located in the heart of the city, this property offers easy access to world-famous restaurants, shopping, and historic sites. With a private garden and plenty of Southern charm, this is the ultimate Charleston experience.',
        price: '800'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: { [Op.in]: ['1 Spot Way', '2 Spot Way', '3 Spot Way', '4 Spot Way'] }
    }, {});
  }
};
