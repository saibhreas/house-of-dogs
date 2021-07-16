import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Profile() {
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.me;
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
                <span className="bold">Phone Number:</span>
                {user.phoneNumber}
              </p>
            </div>

            <div className="service-container">
              <h2>My pets:</h2>
              <br />
              {user.pets?.map((dog) => (
                <div className="pet-container">
                  <p className="m-0">🐕 {dog.name}</p>
                  <p className="m-0 font-sm-1">Breed: {dog.breed}</p>
                  <p className="m-0 font-sm-1">Age: {dog.age ? dog.age + ' years old' : 'No age specified'} </p>
                  <p className="m-0 font-sm-1">Weight: {dog.weight ? dog.weight + ' pounds' : 'No weight specified'} </p>
                  <p className="m-0 font-sm-1">Medication Notes: {dog.medications}</p>
                  <p className="m-0 font-sm-1">Dog's Vet: {dog.veterinarian.name}</p>
                </div>
              ))}
            </div>

            <h2>Appointments History:</h2>
            {user.appointments && user.appointments.length > 0 ? user.appointments?.map((ap) => (
              <div key={ap._id} className="my-2">
                <h3>
                  {new Date(parseInt(ap.from)).toLocaleDateString()} -
                  {new Date(parseInt(ap.to)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  <div className="card px-1 py-1">
                    <Link to={`/providers/${ap.provider._id}`}>
                      <p>{ap.dog.name}</p>
                    </Link>
                    <div>
                      <span>${ap.provider.name}</span>
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
