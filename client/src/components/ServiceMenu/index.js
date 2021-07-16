import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_SERVICES,
  UPDATE_CURRENT_SERVICE,
} from '../../utils/actions';
import { QUERY_SERVICES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import "./index.css";

function ServiceMenu() {
  const [state, dispatch] = useStoreContext();

  const { services } = state;

  const { loading, data: serviceData } = useQuery(QUERY_SERVICES);

  useEffect(() => {
    if (serviceData) {
      dispatch({
        type: UPDATE_SERVICES,
        services: serviceData.services,
      });
      serviceData.services.forEach((serv) => {
        idbPromise('services', 'put', serv);
      });
    } else if (!loading) {
      idbPromise('services', 'get').then((services) => {
        dispatch({
          type: UPDATE_SERVICES,
          services: services,
        });
      });
    }
  }, [serviceData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_SERVICE,
      currentService: id,
    });
  };

  return (
    <div className="service-container">
      <h2>Services offered:</h2>
      {services.map((item) => (
        <button
          className="mx-1"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default ServiceMenu;
