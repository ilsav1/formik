// Instruments
import { FILL_PROFILE } from './types';

const initialState = {
    firstName: 'Уолтер',
    lastName:  'Уайт',
};

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILL_PROFILE:
            return { ...state, ...payload };

        default:
            return state;
    }
};
