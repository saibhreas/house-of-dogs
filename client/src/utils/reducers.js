import { useReducer } from 'react';
import {
  UPDATE_PROVIDERS,
  UPDATE_SERVICES,
  UPDATE_CURRENT_SERVICE,
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
