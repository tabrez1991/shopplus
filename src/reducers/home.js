import { SHOW_LOGIN, SHOW_NAVBAR, GET_CATEGORIES, ERROR } from '../actions/types';

const initialState = {
    show_login: false,
    show_navbar: false,
    categoties: {},
    errors_res: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SHOW_LOGIN:
            return {
                ...state,
                show_login: payload
            };
        case SHOW_NAVBAR:
            return {
                ...state,
                show_navbar: payload
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }
        case ERROR:
            return {
                ...state,
                errors_res: payload
            }
        default:
            return state;
    }
}