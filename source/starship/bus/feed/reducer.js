// Instruments
import { FILL_STARSHIPS, FETCH_STARSHIPS_ASYNC } from './types';

const initialState = {
    starships: [],
    isFetching: false,
};

export const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_STARSHIPS_ASYNC:
            return { ...state, isFetching: true };

        case FILL_STARSHIPS:
            return { ...state, starships: payload, isFetching: false };

        default:
            return state;
    }
};
