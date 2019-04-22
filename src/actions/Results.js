import { createAction } from 'promise-middleware-redux';
import { getDishes } from '../services/forkify';

export const [
  fetchQuote,
  FETCH_RESULTS,
  FETCH_RESULTS_PENDING, 
  FETCH_RESULTS_FULFILLED,
  FETCH_RESULTS_REJECTED
] = createAction('FETCH_RESULTS', getDishes);

