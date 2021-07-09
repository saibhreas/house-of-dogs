const db = require('../config/connection');
const { User, ServiceProvider, Pets } = require('../models');
const UserSeeds = require('./UserSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(UserSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
