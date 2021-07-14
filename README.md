# HOUSE OF DOGS

### Licence: Apache

###license ![github license](https://img.shields.io/badge/license-Apache-brightgreen.svg)

### Brief Intro
**House of Dogs** is a SAAS product where pet owners can review service providers in their area and schedule for services.
services range from:
  * Dog Walkers
  * Pet Groomers
  * Doggy daycare
  * Full Kennel Facilites
Service providers get access to pet owners, use of cloud database for appointment scheduling  and service fullfillment.

## Table of contents
  * [Description](##Description)
  * [Installation](###Instalation)
  * [Technologies](###Technologies)
  * [Authors](###Authors)
  * [Licence](###Licence)
 
## Description: Full Stack MERN with Apollo GraphQL server

### *App is Full Stack  Mongo Express...*



*Frontend/Client* 

  * is an Apollo/client server utilizing middleware for authentication, web tokens and Stripe?.
  React router App demonstrating Global States and Reducers
  Integrates JSON token system, as middleware for authentication, with graphql for database querry management.

*Server*
  * is Apollo-express/graphql  utilizing middleware for authentication, web tokens, and Stripe?  

### Installation and integeration:
  * 3 package.json sets of dependencies
      * Main :
        * "scripts":
          {"start": "node server/server.js",
    "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "seed": "cd server && npm run seed",
    "build": "cd client && npm run build"
  }
    * Client
      * npm install apollo-boost graphql-tag graphql --save
      * npm install jwt-decode
      * npm install --save react-router-dom
        
    * Server
      * npm apollo-server-express 
        bcrypt
        express
        graphql
        jsonwebtoken
        mongoose
        stripe
      * npm install stripe --save
### Technologies

### Authors

  * Alex
  * Chris :P
  * Siobhan: **Dolphins**, gotta love em!. yeah dolphins!