import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { MAKE_APPOINTMENT } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

function MakeAppointment(props) {
  const { id, name } = useParams();

  const [formState, setFormState] = useState({
    dog: '',
    provider: id || '',
    from: '',
    to: '',
    name: name || ''
  });

  const { data } = useQuery(QUERY_ME);
  const user = data?.me;
  const [makeAppointment] = useMutation(MAKE_APPOINTMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await makeAppointment({
      variables: {
        appointment: {
          dog: formState.dog,
          provider: formState.provider,
          from: formState.from,
          to: formState.to,
        }
      },
    });
    const aptId = mutationResponse.data.makeAppointment;
    window.location.assign('/success');
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
      <Link to="/">← Go to Homepage</Link>

      <br />
      <br />
      <h2>Make an Appointment with Provider</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="provider">Provider:</label>
          <input
            placeholder="Provider"
            name="provider"
            type="text"
            id="provider"
            disabled
            value={formState.name}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="dog">Choose Pet:</label>
          <select name="dog"
            id="dog"
            onChange={handleChange}>
            <option selected disabled>Choose Dog</option>
            {user?.pets?.map((dog) => (
              <option key={dog._id} value={dog._id}>{dog.name}</option>
            ))}
          </select>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="from">From Date:</label>
          <input
            name="from"
            type="date"
            id="from"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="to">To Date:</label>
          <input
            name="to"
            type="date"
            id="to"
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

export default MakeAppointment;
