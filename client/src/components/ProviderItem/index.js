import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";

import { idbPromise } from "../../utils/helpers";

import image1 from '../../assets/dog-ser-1.png';
import image2 from '../../assets/dog-service-2.png';
import image3 from '../../assets/dog-service-3.png';
import image4 from '../../assets/dog-service-4.png';
import './index.css';
import Auth from "../../utils/auth";

const listImages = [image1, image2, image3, image4];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomPic() {
  return listImages[getRandomInt(3)];
}

function ProviderItem(provider) {
  const [state, dispatch] = useStoreContext();

  const { item } = provider;
  const { _id, name, email, phoneNumber } = item;


  const bookProvider = () => {
    if (Auth.loggedIn()) {
      window.location.assign(`/appointment/${_id}/${name}`);
    } else {
      window.location.assign('/login');
    }
  }



  return (
    <div className="card px-1 py-1">
      <Link to={`/providers/${_id}`}>
        <img
          className="provider-image"
          src={getRandomPic()}
          alt={name}
        />
        <p>{name}</p>
      </Link>
      <div>
        <p className="m-0 font-sm-1">{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <button className="book-provider" onClick={bookProvider}>Book Provider</button>
    </div>
  );
}

export default ProviderItem;
