import { TOGGLE_PORTFOLIO, TOGGLE_ABOUT } from '../actions/types';

const initialState = {
    showPortfolio: false,
    showAbout: false,
};

export default function (state = initialState, action) {
    const { type } = action;

    switch (type) {
        case TOGGLE_PORTFOLIO:
            return {
                ...state,
                showPortfolio: true,
                showAbout: false,
            };

        case TOGGLE_ABOUT:
            return {
                ...state,
                showPortfolio: false,
                showAbout: true,
            };

        default:
            return state;
    }
}
