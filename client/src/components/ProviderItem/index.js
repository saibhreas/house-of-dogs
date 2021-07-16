import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import image1 from '../../assets/dog-service-1.png';
import image2 from '../../assets/dog-service-2.png';
import image3 from '../../assets/dog-service-3.png';
import image4 from '../../assets/dog-service-4.png';
import './index.css';

const listImages = [image1, image2, image3, image4];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomPic() {
  return listImages[getRandomInt(3)];
}

function ProviderItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    name,
    _id,
    price,
    about
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
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
        {/* <div>{about}</div> */}
        <span>${price}</span>
      </div>
      <button className="book-provider" onClick={addToCart}>Book Provider</button>
    </div>
  );
}

export default ProviderItem;