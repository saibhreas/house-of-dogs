const db = require('../config/connection');
const { Dog } = require('../models');
const dogSeeds = require('./DogSeed.json');

db.once('open', async () => {
  try {
    await Dog.deleteMany({});
    await Dog.create(dogSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});


