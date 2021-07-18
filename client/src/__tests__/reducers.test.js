import { reducer } from '../utils/reducers';
import {
  UPDATE_PROVIDERS,
  UPDATE_SERVICES,
  UPDATE_CURRENT_SERVICE,
} from '../utils/actions';

const initialState = {
  providers: [],
  services: [{ name: 'Dog Walking' }],
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
