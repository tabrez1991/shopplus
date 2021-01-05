import { SHOW_LOGIN, SHOW_NAVBAR, GET_CATEGORIES, ERROR } from './types';
import axios from 'axios';
export const showLogin = (data) => dispatch => {
    dispatch({
        type: SHOW_LOGIN,
        payload: data
    });
}

export const showNavbar = (data) => dispatch => {
    dispatch({
        type: SHOW_NAVBAR,
        payload: data
    });
}

export const getCategories = () => async dispatch => {
    try {
        var config = {
            method: 'get',
            url: 'https://api.gyftr.net/smartbuyapi/smartbuyapi/hdfc/api/v1/home/categories',
            headers: {}
        };
        const res = await axios(config);
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data.data
        })
    } catch (err) {
        console.error(err)
        dispatch({
            type: ERROR,
            payload: err
        })
    }
}