const User = require('./User');
const Dog = require('./Dog');
const Veterinarian = require('./Veterinarian');
const Service = require('./Service');
const Provider = require('./Provider');




const { Schema, model } = require('mongoose');

module.exports = { User, Dog , Veterinarian, Service, Provider };