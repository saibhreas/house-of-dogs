import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';

function Success() {

  useEffect(() => {
    async function goToPage() {
      setTimeout(() => {
        window.location.assign('/profile');
      }, 3000);
    }

    goToPage();
  }, []);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your booking!</h2>
        <h2>You will now be redirected to the profile page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
