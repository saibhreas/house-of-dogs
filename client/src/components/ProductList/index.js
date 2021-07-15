import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PROVIDERS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PROVIDERS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentService } = state;

  const { loading, data } = useQuery(QUERY_PROVIDERS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PROVIDERS,
        providers: data.providers,
      });
      data.providers.forEach((product) => {
        idbPromise('providers', 'put', product);
      });
    } else if (!loading) {
      idbPromise('providers', 'get').then((providers) => {
        dispatch({
          type: UPDATE_PROVIDERS,
          providers: providers,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProviders() {
    if (!currentService) {
      return state.providers;
    }

    return state.providers.filter(
      (product) => product.service._id === currentService
    );
  }

  return (
    <div className="my-2">
      <h2>Dog Providers:</h2>
      {state.providers.length ? (
        <div className="flex-row">
          {filterProviders().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>No Providers are available at the moment!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
