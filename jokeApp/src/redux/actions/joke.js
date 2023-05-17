import {
    GET_JOKE_ERROR, GET_JOKE_FULFILLED, GET_JOKE_PENDING
} from "../constant/index.js";

export const getJokePending = () => ({
  type: GET_JOKE_PENDING
});

export const getJokeData = (data) => ({
  type: GET_JOKE_FULFILLED,
  data
});

export const getJokeError = (error) => ({
   type: GET_JOKE_ERROR,
   error
});
