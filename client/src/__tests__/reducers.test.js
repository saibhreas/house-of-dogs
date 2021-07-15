import { reducer } from '../utils/reducers';
import {
  UPDATE_PROVIDERS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_SERVICES,
  UPDATE_CURRENT_SERVICE,
  CLEAR_CART,
} from '../utils/actions';

const initialState = {
  providers: [],
  cart: [
    {
      _id: '1',
      name: 'Soup',
      purchaseQuantity: 1
    },
    {
      _id: '2',
      name: 'Bread',
      purchaseQuantity: 2
    }
  ],
  services: [{ name: 'Food' }],
  currentService: '1',
};

test('UPDATE_PROVIDERS', () => {
  let newState = reducer(initialState, {
    type: UPDATE_PROVIDERS,
    providers: [{}, {}]
  });

  expect(newState.providers.length).toBe(2);
  expect(initialState.providers.length).toBe(0);
});

test('ADD_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_CART,
    product: { purchaseQuantity: 1 }
  });

  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2);
});

test('UPDATE_CART_QUANTITY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CART_QUANTITY,
    _id: '1',
    purchaseQuantity: 3
  });

  expect(newState.cart[0].purchaseQuantity).toBe(3);
  expect(newState.cart[1].purchaseQuantity).toBe(2);
});

test('REMOVE_FROM_CART', () => {
  let newState1 = reducer(initialState, {
    type: REMOVE_FROM_CART,
    _id: '1'
  });

  expect(newState1.cart.length).toBe(1);
  expect(newState1.cart[0]._id).toBe('2');

  let newState2 = reducer(newState1, {
    type: REMOVE_FROM_CART,
    _id: '2'
  });

  expect(newState2.cart.length).toBe(0);

  expect(initialState.cart.length).toBe(2);
});

test('ADD_MULTIPLE_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_MULTIPLE_TO_CART,
    providers: [{}, {}]
  });

  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(2);
});

test('UPDATE_SERVICES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_SERVICES,
    services: [{}, {}]
  });

  expect(newState.services.length).toBe(2);
  expect(initialState.services.length).toBe(1);
});

test('UPDATE_CURRENT_SERVICE', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_SERVICE,
    currentService: '2'
  });

  expect(newState.currentService).toBe('2');
  expect(initialState.currentService).toBe('1');
});

test('CLEAR_CART', () => {
  let newState = reducer(initialState, {
    type: CLEAR_CART
  });

  expect(newState.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(2);
});
