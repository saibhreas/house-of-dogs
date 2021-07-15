import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_DOG } from '../utils/mutations';


function DogSignup(props) {
  const [formState, setFormState] = useState({
    name: '',
    breed: '',
    age: null,
    weight: null,
    gender: '',
    veterinary: null,
    medications: []
  });
  const [addDog] = useMutation(ADD_DOG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addDog({
      variables: {
        name: formState.name,
        breed: formState.breed,
        age: formState.age,
        weight: formState.weight,
        gender: formState.gender,
        veterinary: formState.veterinary,
        medications: formState.medications
      }
    });
    // TODO - Do smth when dog is signed up 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Dog Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default DogSignup;
