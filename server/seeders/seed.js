//TODO: refract--do we need path here?
const path = require('path');
// TODO: 
const mongoose = require('mongoose');
const db = require('../config/connection');

const DogSeeds = require('./DogSeed.json');
const ProviderSeeds = require('./ProviderSeed.json');
const UserSeeds = require('./UserSeed.json');
const VeterinarianSeeds = require('./VeterinarianSeed.json');
const ServiceSeeds = require('./ServiceSeed.json');

const { User, Provider, Dog, Veterinarian, Service } = require('../models');

db.once('open', async () => {
  try {

    // ? CLEAR
    await User.deleteMany({});
    await Provider.deleteMany({});
    await Dog.deleteMany({});
    await Veterinarian.deleteMany({});
    await Service.deleteMany({});

    // ? CREATE
    await User.create(UserSeeds);
    await Provider.create(ProviderSeeds);
    await Dog.create(DogSeeds);
    await Veterinarian.create(VeterinarianSeeds);
    await Service.create(ServiceSeeds);
    // *TODO FOR LOOP FOR USER AND PROVIDER
    for (let i = 0; i < UserSeeds.length; i++) {
      const { _id, name } = await User.create(UserSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: name },
        {
          $addToSet: {
            // TODO ask about endpoint  vs lesson material <Route exact path="/thoughts/:thoughtId">
            userID: _id,
          },
        }
      );
    }
  } catch (err) {
    console.log(err);
    // process.exit(1);
  }
  try {
    for (let i = 0; i < ProviderSeeds.length; i++) {
      const { _id, name } = await Provider.create(ProviderSeeds[i]);
      const provider = await Provider.findOneAndUpdate(
        { providerName: name },
        {
          $addToSet: {
            // TODO ask about endpoint  vs lesson material <Route exact path="/thoughts/:thoughtId">
            providerID: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    // process.exit(1);
  }

    // ? COMPLETE
  console.log('all done!');
  process.exit(0);

});
