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
        review: 'This was the most spooktacular place I have been to yet!! I cannot wait to tell me friends how I almost fainted. The staff was amazing and very scary!',
        stars: '5',
      },
      {
        spotId: '1',
        userId: '3',
        review: 'I had an amazing time at this spotId! The location was perfect and the amenities were great.',
        stars: '4',
      },
      {
        spotId: '1',
        userId: '4',
        review: 'I would definitely recommend this spotId to anyone visiting the area. The views were breathtaking and the staff was very helpful.',
        stars: '4',
      },
      {
        spotId: '1',
        userId: '5',
        review: 'This was a great spotId for a weekend getaway. The house was clean and spacious, and the outdoor space was perfect for relaxing.',
        stars: '4',
      },
      {
        spotId: '1',
        userId: '6',
        review: 'I had a wonderful time at this spotId. The location was convenient and the house was beautiful. I would definitely stay here again.',
        stars: '5',
      },
      {
        spotId: '2',
        userId: '1',
        review: 'Worst place! He is my competitor!',
        stars: '1',
      },
      {
        spotId: '2',
        userId: '1',
        review: 'This place was amazing! The views were incredible and the amenities were top-notch. I would definitely stay here again.',
        stars: '5',
      },
      {
        spotId: '2',
        userId: '3',
        review: 'I had a great time at this spot. The location was perfect and the house was beautiful. Would definitely recommend it to anyone looking for a relaxing getaway.',
        stars: '4',
      },
      {
        spotId: '2',
        userId: '4',
        review: 'This place was okay. The house was nice, but there wasn\'t really anything special about it. The location was good though.',
        stars: '3',
      },
      {
        spotId: '2',
        userId: '5',
        review: 'I had a great time at this spot. The house was very spacious and had everything I needed for a comfortable stay. The location was also very convenient.',
        stars: '4',
      },
      {
        spotId: '2',
        userId: '6',
        review: 'I was disappointed with this spot. The house was not as nice as I expected and there were some issues with the cleanliness. The location was good though.',
        stars: '2',
      },
      {
        spotId: '3',
        userId: '4',
        review: 'My family and I had a great time at this spot. The pool was amazing and the views were beautiful. Would definitely recommend!',
        stars: '4',
      },
      {
        spotId: '3',
        userId: '5',
        review: 'We had a wonderful stay at this property. The house was clean, comfortable, and had everything we needed. The outdoor space was perfect for grilling and hanging out by the pool. Would definitely book again!',
        stars: '5',
      },
      {
        spotId: '3',
        userId: '6',
        review: 'The location of this spot was perfect for us. It was close to all the attractions in the area, but still felt private and secluded. The house itself was spacious and well-equipped. Overall, a great experience!',
        stars: '4',
      },
      {
        spotId: '3',
        userId: '2',
        review: 'This property was amazing. The views of the desert were breathtaking, and the house was clean and comfortable. We spent most of our time outside by the pool and enjoyed every minute of it. Highly recommend!',
        stars: '5',
      },
      {
        spotId: '3',
        userId: '1',
        review: 'We had a great time at this spot. The house was beautiful and had everything we needed for a comfortable stay. The pool was perfect for cooling off in the Arizona heat. Would definitely come back!',
        stars: '4',
      },
      {
        spotId: '4',
        userId: '2',
        review: 'This French Quarter condo was amazing! The location was perfect and the space was cozy yet spacious. I would definitely stay here again!',
        stars: '5',
      },
      {
        spotId: '4',
        userId: '3',
        review: 'We had a great time at this charming French Quarter condo. The host was super helpful and the location couldn\'t have been better. Highly recommend!',
        stars: '4',
      },
      {
        spotId: '4',
        userId: '1',
        review: 'Our stay at this condo was perfect! It was in a great location and the space was clean and comfortable. We would definitely stay here again!',
        stars: '5',
      },
      {
        spotId: '4',
        userId: '5',
        review: 'This was a lovely spot in the heart of the French Quarter. The apartment was clean and well-maintained, and the location was perfect for exploring the city. Highly recommended!',
        stars: '4',
      },
      {
        spotId: '4',
        userId: '6',
        review: 'My stay at this condo was amazing. The location was perfect and the space was clean and comfortable. I would definitely stay here again!',
        stars: '5',
      },{
        spotId: '5',
        userId: '1',
        review: 'We had a great time at this Lakefront Luxury property. The view was amazing and the space was very clean. Highly recommend!',
        stars: '4',
      },
      {
        spotId: '5',
        userId: '3',
        review: 'This Lakefront Luxury property was exactly what we were looking for. The location was great and the views were amazing. Highly recommend!',
        stars: '5',
      },
      {
        spotId: '5',
        userId: '4',
        review: 'Our stay at this Lakefront Luxury property was wonderful. The view was breathtaking and the location was perfect. Highly recommended!',
        stars: '5',
      },
      {
        spotId: '5',
        userId: '2',
        review: 'I had a great stay at this Lakefront Luxury property. The view was amazing and the space was clean and comfortable. Highly recommend!',
        stars: '4',
      },
      {
        spotId: '5',
        userId: '6',
        review: 'This Lakefront Luxury property was a perfect getaway for me. The views were incredible and the space was comfortable. Highly recommended!',
        stars: '5',
      },
      {
        spotId: '6',
        userId: '2',
        review: 'This place was absolutely stunning. The views were breathtaking and the amenities were top-notch. The staff was incredibly friendly and accommodating, making our stay all the more enjoyable. Would highly recommend this spot to anyone looking for a luxurious getaway.',
        stars: '5'
      },
      {
        spotId: '6',
        userId: '3',
        review: 'We had an amazing time at this property. The house was beautiful and had everything we needed to feel comfortable and relaxed. The location was perfect, with easy access to nearby hiking trails and other outdoor activities. Would definitely come back!',
        stars: '4'
      },
      {
        spotId: '6',
        userId: '4',
        review: 'Our stay at this property was one of the highlights of our trip. The house was stunning and had everything we needed for a comfortable stay. The pool and hot tub were perfect for relaxing and taking in the beautiful views. The only downside was that we had to leave!',
        stars: '5'
      },
      {
        spotId: '6',
        userId: '5',
        review: 'This property exceeded all of our expectations. The house was spacious and beautifully decorated, and the outdoor space was simply amazing. We spent most of our time by the pool, soaking up the sun and enjoying the incredible views. Would definitely recommend!',
        stars: '4'
      },
      {
        spotId: '6',
        userId: '1',
        review: 'Our stay at this property was absolutely amazing. The house was stunning and had all the amenities we needed for a comfortable stay. The views from the balcony were breathtaking, and we loved spending our evenings watching the sunset. Would highly recommend this spot to anyone looking for a luxurious getaway.',
        stars: '5'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: ['1','3', '2', '4'] }
    }, {});
  }
};
