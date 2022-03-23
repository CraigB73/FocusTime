import { mocks, mockImages } from './mock';
import camelize from 'camelize';

// Udemy react native lesson 142 -143 for review if need

export const restaurantsRequest = ( location ) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found')
    }
    resolve(mock);
  });
};

// transforms json underscores, dots and dashes to camelCase
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((photo) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    });
    return {
      ...restaurant, 
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    }  });

  return camelize(mappedResults);
};

// restaurantRequest()
//   .then(restaurantsTransform) 
//   .then((transfromResponse) => {
//     console.log(transfromResponse);
//   })
//   .catch((err) => {
//   console.log(err)
// });