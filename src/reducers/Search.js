
import { FETCH_RESULTS } from '../actions/results';

const initialState =  {
  results: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_RESULTS:
      return {
        ...state,
        results: payload
      };
    default:
      return state;
  }
}
