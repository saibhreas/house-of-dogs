import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_DOG } from '../utils/mutations';
import dogFace from '../assets/dog_face.png';

function DogSignup(props) {
  const [formState, setFormState] = useState({
    name: '',
    breed: '',
    age: null,
    weight: null,
    gender: '',
    vetEmail: '',
    vetName: '',
    vetPhoneNumber: '',
    vetAddress: '',
    medications: []
  });
  const [addDog] = useMutation(ADD_DOG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addDog({
      variables: {
        dog: {
          name: formState.name,
          breed: formState.breed,
          age: Number(formState.age || 0),
          weight: Number(formState.weight || 0),
          gender: formState.gender,
          medications: formState.medications,
          veterinarian: {
            name: formState.vetName || '',
            email: formState.vetEmail || '',
            address: formState.vetAddress || '',
            phoneNumber: formState.vetPhoneNumber || '',
          },
        }
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
    <div className="dog-signup container my-1">
      <Link to="/">← Go to Homepage</Link>

      <h2>Register your Dog</h2>
      <br />
      <img src={dogFace} alt="dog-face" />

      <form className="dog-signup-form" onSubmit={handleFormSubmit}>

        <div className="dog-form">

          <div className="flex-row space-between my-2">
            <label htmlFor="name">Dog Name:</label>
            <input
              placeholder="Dog name"
              name="name"
              type="text"
              id="name"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="breed">Breed:</label>
            <input
              placeholder="Labrador,poodle, or"
              name="breed"
              type="text"
              id="breed"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="age">Age:</label>
            <input
              placeholder="Age"
              name="age"
              type="number"
              id="age"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="weight">Weight:</label>
            <input
              placeholder="Weight"
              name="weight"
              type="number"
              id="weight"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="gender">Gender:</label>

            <select name="gender"
              id="gender"
              onChange={handleChange}>
              <option selected value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="medications">Notes about medications:</label>
            <textarea
              placeholder="What medicines does your dog take"
              name="medications"
              type="text"
              id="medications"
              rows="6"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex-row flex-end">
            <button type="submit">Register</button>
          </div>

        </div>


        <div className="veterinarian-form">

          <h4>Your dog's Veterinarian info</h4>
          <p>(leave blank if no vet info)</p>
          <br />

          <div className="flex-row space-between my-2">
            <label htmlFor="vetName">Full Name:</label>
            <input
              placeholder="Full Name"
              name="vetName"
              type="text"
              id="vetName"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="vetAddress">Address:</label>
            <input
              placeholder="Address"
              name="vetAddress"
              type="text"
              id="vetAddress"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="vetPhoneNumber">Phone Number:</label>
            <input
              placeholder="Phone Number"
              name="vetPhoneNumber"
              type="text"
              id="vetPhoneNumber"
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="vetEmail">Email:</label>
            <input
              placeholder="vet@ymail.com"
              name="vetEmail"
              type="email"
              id="vetEmail"
              onChange={handleChange}
            />
          </div>

        </div>

      </form>

    </div>
  );
}

export default DogSignup;
