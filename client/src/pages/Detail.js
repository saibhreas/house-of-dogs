import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PROVIDERS } from '../utils/actions';
import { QUERY_PROVIDERS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProvider, setcurrentProvider] = useState({});

  const { loading, data } = useQuery(QUERY_PROVIDERS);

  const { providers } = state;

  useEffect(() => {
    // already in global store
    if (providers.length) {
      setcurrentProvider(providers.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PROVIDERS,
        providers: data.providers,
      });

      data.providers.forEach((product) => {
        idbPromise('providers', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('providers', 'get').then((indexedProviders) => {
        dispatch({
          type: UPDATE_PROVIDERS,
          providers: indexedProviders,
        });
      });
    }
  }, [providers, data, loading, dispatch, id]);

  const bookProvider = () => {
    if (Auth.loggedIn()) {
      window.location.assign(`/appointment/${currentProvider._id}/${currentProvider.name}`);
    } else {
      window.location.assign('/login');
    }
  }

  return (
    <>
      {currentProvider ? (
        <div className="container my-1">
          <Link to="/">← Back to Providers</Link>

          <h2>{currentProvider.name}</h2>

          <p className="m-0">Email: {currentProvider.email}</p>
          <p className="m-0">Phone: {currentProvider.phoneNumber}</p>
          <p>Address: {currentProvider.address}</p>
          <p>
            <strong>Service: </strong>
            {currentProvider.service?.name}
          </p>

          <p>
            <strong>About:</strong>
            <p>{currentProvider.about}</p>

          </p>

          <br />

          <button onClick={bookProvider}>Book Provider</button>

        </div>
      ) : null
      }
      {loading ? <img src={spinner} alt="loading" /> : null}
    </>
  );
}

export default Detail;
