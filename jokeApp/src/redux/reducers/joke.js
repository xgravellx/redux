import {
  GET_JOKE_ERROR, GET_JOKE_FULFILLED, GET_JOKE_PENDING
} from "../constant/index.js";

const initialState = {
  pending: false,
  data: '',
  error: false
};

export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_JOKE_PENDING:
        return {
          ...state,
          pending: true,
        }
      case GET_JOKE_FULFILLED:
        return {
          ...state,
          pending: false,
          error: false,
          data: action.data
        }
      case GET_JOKE_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error,
        }
      default:
        return state
    }
};
