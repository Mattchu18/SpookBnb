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
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'true',
      },
      {
        spotId: '1',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
      {
        spotId: '1',
        url: 'https://media.istockphoto.com/id/1033237148/photo/haunted-house-in-the-halloween-night.jpg?s=612x612&w=0&k=20&c=mhCeuOmpfxj6uYNplTz_vwzD0OKa0juweB_bWbWLJSo=',
        preview: 'false',
      },
      {
        spotId: '1',
        url: 'https://media.istockphoto.com/id/1182964639/photo/two-glowing-halloween-pumpkins-at-the-entrance-to-an-old-wooden-house.jpg?s=612x612&w=0&k=20&c=xSksE905-0R-EBdMaIKU8Fqim6qqJtiOcj1JJfQjNS4=',
        preview: 'false',
      },
      {
        spotId: '1',
        url: 'https://media.istockphoto.com/id/1281059127/photo/floating-ghost-evil-spirit-in-a-derelict-asylum-hospital.jpg?s=612x612&w=0&k=20&c=Azpjg8Wi2H1cj4-IQJ6i9pQ2_kR7sVCAI2rOzseurpM=',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://media.istockphoto.com/id/1127425560/photo/3d-rendering-of-darken-empty-attic-with-aged-stuff-and-light-rays-through-holes.jpg?s=612x612&w=0&k=20&c=j_YNRa9tzTN1Wbbt5zQiM9eR297US2mXwl0OycNqpmI=',
        preview: 'true',
      },
      {
        spotId: '2',
        url: 'https://media.istockphoto.com/id/1033237148/photo/haunted-house-in-the-halloween-night.jpg?s=612x612&w=0&k=20&c=mhCeuOmpfxj6uYNplTz_vwzD0OKa0juweB_bWbWLJSo=',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://media.istockphoto.com/id/1179346110/photo/the-dwelling-the-place-has-it-own-devil-monster-in-haunted-house-3d-illustration.jpg?s=612x612&w=0&k=20&c=A6HPcWUALAudZPK-5JFKmbGwOkssYuh9FEXIUA5G4So=',
        preview: 'false',
      },
      {
        spotId: '2',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'true',
      },
      {
        spotId: '3',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://media.istockphoto.com/id/186595231/photo/spooky-haunted-house-at-night.jpg?s=612x612&w=0&k=20&c=fbEsCti3W2cOAd3v4oWWw3Y2S17uRtQ8e2s7-6fR2H0=',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://media.istockphoto.com/id/1179346110/photo/the-dwelling-the-place-has-it-own-devil-monster-in-haunted-house-3d-illustration.jpg?s=612x612&w=0&k=20&c=A6HPcWUALAudZPK-5JFKmbGwOkssYuh9FEXIUA5G4So=',
        preview: 'false',
      },
      {
        spotId: '3',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://media.istockphoto.com/id/108309587/photo/children-in-ghost-costumes-trick-or-treat-at-haunted-house.jpg?s=612x612&w=0&k=20&c=VWyqe_4BZXK0g63LABfu96wBCFRGPs0SZ0y9CGoL7tY=',
        preview: 'true',
      },
      {
        spotId: '4',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '4',
        url: 'https://media.istockphoto.com/id/186595231/photo/spooky-haunted-house-at-night.jpg?s=612x612&w=0&k=20&c=fbEsCti3W2cOAd3v4oWWw3Y2S17uRtQ8e2s7-6fR2H0=',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://media.istockphoto.com/id/506695963/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=iIVCIT4LCQ5J-pDccAbXpUbvulw6kt5fuMmeKehMblw=',
        preview: 'true',
      },
      {
        spotId: '5',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://media.istockphoto.com/id/108309587/photo/children-in-ghost-costumes-trick-or-treat-at-haunted-house.jpg?s=612x612&w=0&k=20&c=VWyqe_4BZXK0g63LABfu96wBCFRGPs0SZ0y9CGoL7tY=',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '5',
        url: 'https://media.istockphoto.com/id/831508820/photo/horror-background.jpg?s=612x612&w=0&k=20&c=qom4zONcH4-2UDN3D3oWs4w9eLWp6kdXCxyGClHDB6o=',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://media.istockphoto.com/id/1182964639/photo/two-glowing-halloween-pumpkins-at-the-entrance-to-an-old-wooden-house.jpg?s=612x612&w=0&k=20&c=xSksE905-0R-EBdMaIKU8Fqim6qqJtiOcj1JJfQjNS4=',
        preview: 'true',
      },
      {
        spotId: '6',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://media.istockphoto.com/id/1327837669/photo/old-haunted-abandoned-mansion-in-creepy-night-forest-with-cold-fog-atmosphere-3d-rendering.jpg?s=612x612&w=0&k=20&c=hngRFupWhIRdjB1kUKJ9TwDC9YjOP12Tq3bOELjOJNQ=',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '6',
        url: 'https://media.istockphoto.com/id/831508820/photo/horror-background.jpg?s=612x612&w=0&k=20&c=qom4zONcH4-2UDN3D3oWs4w9eLWp6kdXCxyGClHDB6o=',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://media.istockphoto.com/id/584470700/photo/dark-mysterious-halloween-landscape-with-old-house.jpg?s=612x612&w=0&k=20&c=w-3dECpLqZ7WGsZezHT7gqONE2vFQmWW9wgwtDBLzkw=',
        preview: 'true',
      },
      {
        spotId: '7',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://media.istockphoto.com/id/1033237148/photo/haunted-house-in-the-halloween-night.jpg?s=612x612&w=0&k=20&c=mhCeuOmpfxj6uYNplTz_vwzD0OKa0juweB_bWbWLJSo=',
        preview: 'false',
      },
      {
        spotId: '7',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://media.istockphoto.com/id/1248271671/photo/an-abandoned-gloomy-wooden-mansion-that-is-being-destroyed-by-the-weather-and-lack-of-human.jpg?s=612x612&w=0&k=20&c=WC02WoAS-1n_SqoG9uw8nnSITrWZrhMwRQuuyIW1YCo=',
        preview: 'true',
      },
      {
        spotId: '8',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://media.istockphoto.com/id/108309587/photo/children-in-ghost-costumes-trick-or-treat-at-haunted-house.jpg?s=612x612&w=0&k=20&c=VWyqe_4BZXK0g63LABfu96wBCFRGPs0SZ0y9CGoL7tY=',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '8',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'true',
      },
      {
        spotId: '9',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://media.istockphoto.com/id/831508820/photo/horror-background.jpg?s=612x612&w=0&k=20&c=qom4zONcH4-2UDN3D3oWs4w9eLWp6kdXCxyGClHDB6o=',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '9',
        url: 'https://media.istockphoto.com/id/1280975546/photo/abandoned-haunted-house-refuge-of-spirits-moonlit-night-3d-illustration.jpg?s=612x612&w=0&k=20&c=NFQgqrJfHpuLmcIlI8DkRqrHb9c3fkh3varo0P1bzYY=',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://media.istockphoto.com/id/186595231/photo/spooky-haunted-house-at-night.jpg?s=612x612&w=0&k=20&c=fbEsCti3W2cOAd3v4oWWw3Y2S17uRtQ8e2s7-6fR2H0=',
        preview: 'true',
      },
      {
        spotId: '10',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://media.istockphoto.com/id/1248271671/photo/an-abandoned-gloomy-wooden-mansion-that-is-being-destroyed-by-the-weather-and-lack-of-human.jpg?s=612x612&w=0&k=20&c=WC02WoAS-1n_SqoG9uw8nnSITrWZrhMwRQuuyIW1YCo=',
        preview: 'false',
      },
      {
        spotId: '10',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://media.istockphoto.com/id/1156275463/photo/haunted-house-scene.jpg?s=612x612&w=0&k=20&c=Mb9lFre3vRJbpR_LYPB0a-_j8HSAYPgb1Yr_pijav3M=',
        preview: 'true',
      },
      {
        spotId: '11',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://media.istockphoto.com/id/1248271671/photo/an-abandoned-gloomy-wooden-mansion-that-is-being-destroyed-by-the-weather-and-lack-of-human.jpg?s=612x612&w=0&k=20&c=WC02WoAS-1n_SqoG9uw8nnSITrWZrhMwRQuuyIW1YCo=',
        preview: 'false',
      },
      {
        spotId: '11',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://media.istockphoto.com/id/1033237148/photo/haunted-house-in-the-halloween-night.jpg?s=612x612&w=0&k=20&c=mhCeuOmpfxj6uYNplTz_vwzD0OKa0juweB_bWbWLJSo=',
        preview: 'true',
      },
      {
        spotId: '12',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://media.istockphoto.com/id/108309587/photo/children-in-ghost-costumes-trick-or-treat-at-haunted-house.jpg?s=612x612&w=0&k=20&c=VWyqe_4BZXK0g63LABfu96wBCFRGPs0SZ0y9CGoL7tY=',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '12',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://media.istockphoto.com/id/1280975546/photo/abandoned-haunted-house-refuge-of-spirits-moonlit-night-3d-illustration.jpg?s=612x612&w=0&k=20&c=NFQgqrJfHpuLmcIlI8DkRqrHb9c3fkh3varo0P1bzYY=',
        preview: 'true',
      },
      {
        spotId: '13',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://media.istockphoto.com/id/186595231/photo/spooky-haunted-house-at-night.jpg?s=612x612&w=0&k=20&c=fbEsCti3W2cOAd3v4oWWw3Y2S17uRtQ8e2s7-6fR2H0=',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '13',
        url: 'https://media.istockphoto.com/id/1327837669/photo/old-haunted-abandoned-mansion-in-creepy-night-forest-with-cold-fog-atmosphere-3d-rendering.jpg?s=612x612&w=0&k=20&c=hngRFupWhIRdjB1kUKJ9TwDC9YjOP12Tq3bOELjOJNQ=',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://media.istockphoto.com/id/831508820/photo/horror-background.jpg?s=612x612&w=0&k=20&c=qom4zONcH4-2UDN3D3oWs4w9eLWp6kdXCxyGClHDB6o=',
        preview: 'true',
      },
      {
        spotId: '14',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://media.istockphoto.com/id/1033237148/photo/haunted-house-in-the-halloween-night.jpg?s=612x612&w=0&k=20&c=mhCeuOmpfxj6uYNplTz_vwzD0OKa0juweB_bWbWLJSo=',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '14',
        url: 'https://media.istockphoto.com/id/506695963/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=iIVCIT4LCQ5J-pDccAbXpUbvulw6kt5fuMmeKehMblw=',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://media.istockphoto.com/id/1326856112/photo/mystery-creepy-view-of-colosseum-at-night-rome-italy.jpg?s=612x612&w=0&k=20&c=xEv-5Rv9PP-G1JUh_E-M0iiaUBtmr14h2w6NUwRXkS8=',
        preview: 'true',
      },
      {
        spotId: '15',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://media.istockphoto.com/id/186595231/photo/spooky-haunted-house-at-night.jpg?s=612x612&w=0&k=20&c=fbEsCti3W2cOAd3v4oWWw3Y2S17uRtQ8e2s7-6fR2H0=',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '15',
        url: 'https://media.istockphoto.com/id/1182964639/photo/two-glowing-halloween-pumpkins-at-the-entrance-to-an-old-wooden-house.jpg?s=612x612&w=0&k=20&c=xSksE905-0R-EBdMaIKU8Fqim6qqJtiOcj1JJfQjNS4=',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://media.istockphoto.com/id/1182964639/photo/two-glowing-halloween-pumpkins-at-the-entrance-to-an-old-wooden-house.jpg?s=612x612&w=0&k=20&c=xSksE905-0R-EBdMaIKU8Fqim6qqJtiOcj1JJfQjNS4=',
        preview: 'true',
      },
      {
        spotId: '16',
        url: 'https://media.istockphoto.com/id/1248271671/photo/an-abandoned-gloomy-wooden-mansion-that-is-being-destroyed-by-the-weather-and-lack-of-human.jpg?s=612x612&w=0&k=20&c=WC02WoAS-1n_SqoG9uw8nnSITrWZrhMwRQuuyIW1YCo=',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://media.istockphoto.com/id/1179346110/photo/the-dwelling-the-place-has-it-own-devil-monster-in-haunted-house-3d-illustration.jpg?s=612x612&w=0&k=20&c=A6HPcWUALAudZPK-5JFKmbGwOkssYuh9FEXIUA5G4So=',
        preview: 'false',
      },
      {
        spotId: '16',
        url: 'https://media.istockphoto.com/id/1176182651/photo/rome-at-night-italy.jpg?s=612x612&w=0&k=20&c=xBo9lZQiWkIoleI9PKxixISe2pIQl74JIfFHDtmYcEg=',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'true',
      },
      {
        spotId: '17',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://media.istockphoto.com/id/1033237148/photo/haunted-house-in-the-halloween-night.jpg?s=612x612&w=0&k=20&c=mhCeuOmpfxj6uYNplTz_vwzD0OKa0juweB_bWbWLJSo=',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://media.istockphoto.com/id/186595231/photo/spooky-haunted-house-at-night.jpg?s=612x612&w=0&k=20&c=fbEsCti3W2cOAd3v4oWWw3Y2S17uRtQ8e2s7-6fR2H0=',
        preview: 'false',
      },
      {
        spotId: '17',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://media.istockphoto.com/id/910584848/photo/spooky-house-with-trees-and-fog.jpg?s=612x612&w=0&k=20&c=-l8VK_ElhT4BwfdpllBvbgqJnFf5Y8CH5fcbkVjEF4A=',
        preview: 'true',
      },
      {
        spotId: '18',
        url: 'https://media.istockphoto.com/id/831508820/photo/horror-background.jpg?s=612x612&w=0&k=20&c=qom4zONcH4-2UDN3D3oWs4w9eLWp6kdXCxyGClHDB6o=',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://media.istockphoto.com/id/584470700/photo/dark-mysterious-halloween-landscape-with-old-house.jpg?s=612x612&w=0&k=20&c=w-3dECpLqZ7WGsZezHT7gqONE2vFQmWW9wgwtDBLzkw=',
        preview: 'false',
      },
      {
        spotId: '18',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://media.istockphoto.com/id/1280975546/photo/abandoned-haunted-house-refuge-of-spirits-moonlit-night-3d-illustration.jpg?s=612x612&w=0&k=20&c=NFQgqrJfHpuLmcIlI8DkRqrHb9c3fkh3varo0P1bzYY=',
        preview: 'true',
      },
      {
        spotId: '19',
        url: 'https://media.istockphoto.com/id/1033237148/photo/haunted-house-in-the-halloween-night.jpg?s=612x612&w=0&k=20&c=mhCeuOmpfxj6uYNplTz_vwzD0OKa0juweB_bWbWLJSo=',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://media.istockphoto.com/id/831508820/photo/horror-background.jpg?s=612x612&w=0&k=20&c=qom4zONcH4-2UDN3D3oWs4w9eLWp6kdXCxyGClHDB6o=',
        preview: 'false',
      },
      {
        spotId: '19',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://media.istockphoto.com/id/674258844/photo/renaissance-castle-pidhirtsi-lviv-region-ukraine.jpg?s=612x612&w=0&k=20&c=4qMkpqURlyBZMJksoIMAT5_VjznDiEQAYvkL85D-dlM=',
        preview: 'true',
      },
      {
        spotId: '20',
        url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://media.istockphoto.com/id/489181524/photo/haunted-house.jpg?s=612x612&w=0&k=20&c=ZDYRiuKLWl-miUJa637iFuY3p8wYjp-tDdCTRPUiy6Q=',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://media.istockphoto.com/id/108309587/photo/children-in-ghost-costumes-trick-or-treat-at-haunted-house.jpg?s=612x612&w=0&k=20&c=VWyqe_4BZXK0g63LABfu96wBCFRGPs0SZ0y9CGoL7tY=',
        preview: 'false',
      },
      {
        spotId: '20',
        url: 'https://media.istockphoto.com/id/1420333267/photo/3d-rendering-of-an-old-japanese-shrine-with-red-torii-gate-and-wooden-illuminated-lantern-at.jpg?s=612x612&w=0&k=20&c=M-ZZsHTGaRYr-SGRcC6LQz9Il-vNxhean5eV3h4g-hw=',
        preview: 'false',
      },
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
