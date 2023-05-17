import {createSelector} from "reselect";

export const selectGetJoke = (state) => state.jokeReducer;

export const selectGetJokePending = createSelector(
    [selectGetJoke],
    (state) => state.pending
);

export const selectGetJokeFulFilled = createSelector(
    [selectGetJoke],
    (state) => state.data
);

export const selectGetJokeError = createSelector(
    [selectGetJoke],
    (state) => state.error
);
