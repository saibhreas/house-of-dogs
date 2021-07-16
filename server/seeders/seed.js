const db = require('../config/connection');

const DogSeeds = require('./DogSeed.json');
const ProviderSeeds = require('./ProviderSeed.json');
const UserSeeds = require('./UserSeed.json');
const ServiceSeeds = require('./ServiceSeed.json');

const { User, Provider, Service } = require('../models');
const { Dog } = require('../models/Dog');

db.once('open', async () => {
  try {

    // ? CLEAR
    await User.deleteMany({});
    await Provider.deleteMany({});
    await Dog.deleteMany({});
    await Service.deleteMany({});

    // ? CREATE
    await User.create(UserSeeds);
    await Provider.create(ProviderSeeds);
    await Dog.create(DogSeeds);
    await Service.create(ServiceSeeds);
  } catch (err) {
    console.log(err);
    // process.exit(1);
  }

  // ? COMPLETE
  console.log('all done!');
  process.exit(0);

});
