import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Profile() {
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.me;
    console.log(user.appointments);
  }

  const getDogById = (dogId) => {
    return user.pets.find(dog => dog._id === dogId);
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Homepage</Link>

        {user ? (
          <>
            <br />
            <br />
            <h2>Profile Info:</h2>
            <div>
              <p className="m-0">
                <span className="bold">Full Name: </span>
                {user.name}
              </p>
              <p className="m-0">
                <span className="bold">Email: </span>
                {user.email}
              </p>
              <p className="m-0">
                <span className="bold">Address: </span>
                {user.address}
              </p>
              <p className="m-0">
                <span className="bold">Phone Number: </span>
                {user.phoneNumber}
              </p>
            </div>

            <div className="service-container">
              <h2>My pets:</h2>
              {user.pets.length > 0 ? user.pets?.map((dog) => (
                <div className="pet-container" key={dog._id}>
                  <p className="m-0">🐕 {dog.name}</p>
                  <p className="m-0 font-sm-1">Breed: {dog.breed}</p>
                  <p className="m-0 font-sm-1">Age: {dog.age ? dog.age + ' years old' : 'No age specified'} </p>
                  <p className="m-0 font-sm-1">Weight: {dog.weight ? dog.weight + ' pounds' : 'No weight specified'} </p>
                  <p className="m-0 font-sm-1">Medication Notes: {dog.medications}</p>
                  <p className="m-0 font-sm-1">Dog's Vet: {dog?.veterinarian?.name}</p>
                </div>
              )) : 'No pets registered. Click "Register a Dog" link'}
            </div>

            <h2>Appointments History:</h2>
            {user.appointments.length > 0 ? user.appointments.map((ap) => (
              <div key={ap._id} className="my-2 appointment-card">
                <div className="flex-row">
                  <div className="px-1 py-1">
                    <span className="bold">Provider: </span>
                    <Link to={`/providers/${ap.provider._id}`}>
                      <span>{ap.provider.name}</span>
                    </Link>
                    <div>
                      <span className="bold">Booking Date:</span>
                      <br />
                      {new Date(ap.from).toLocaleDateString()} - {new Date(ap.to).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="bold">Pet:</span> <span>{getDogById(ap.dog).name}</span>
                    </div>
                  </div>
                </div>
              </div>
            )) : 'No appointments so far'}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Profile;
