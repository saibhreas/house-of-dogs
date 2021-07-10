const db = require('../config/connection');
const { User, ServiceProvider, Pets } = require('../models');
const ProfileSeeds = require('./Profile.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(ProfileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
