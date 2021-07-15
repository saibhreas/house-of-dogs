import { useReducer } from 'react';
import {
  UPDATE_PROVIDERS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_SERVICES,
  UPDATE_CURRENT_SERVICE,
  CLEAR_CART,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update providers array. We use the action.providers property and spread it's contents into the new array.
    case UPDATE_PROVIDERS:
      return {
        ...state,
        providers: [...action.providers],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.providers],
      };
    // Returns a copy of state, maps through the items in the cart.
    // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
    // If so, we remove it from our cart and set the updated state to a variable called `newState`
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      // Then we return a copy of state and check to see if the cart is empty.
      // If not, we return an updated cart array set to the value of `newState`.
      return {
        ...state,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case UPDATE_SERVICES:
      return {
        ...state,
        services: [...action.services],
      };

    case UPDATE_CURRENT_SERVICE:
      return {
        ...state,
        currentService: action.currentService,
      };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
