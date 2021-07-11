//TODO: refract--do we need path here?
const path = require ('path');
const db = require('../config/connection');

const { User, Provider, Dog } = require('../models');
const profileSeeds = require('./Profile.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
