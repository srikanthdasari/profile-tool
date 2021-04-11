import {
    SEARCH_INPROGRESS,
    SEARCH_ERROR,
    SEARCH_SUCCESS,
    REPO_FETCH_INPROGRESS,
    REPO_FETCH_ERROR,
    REPO_FETCH_SUCCESS,
} from './../constants/ActionTypes';
import { initialState } from './../store/store';

const reducer = (state = initialState, { type, data, error, ticker } = {}) => {
    switch (type) {
        case REPO_FETCH_INPROGRESS:
        case SEARCH_INPROGRESS:
            return {
                ...state,
                status: type
            };
        case REPO_FETCH_ERROR:
        case SEARCH_ERROR:
            return {
                ...state,
                status: type,
                error,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                status: type,
                userProfile: data,
            };
        case REPO_FETCH_SUCCESS:
            return {
                ...state,
                status: type,
                repos: data
            }
        default:
            return state;
    }
};

export default reducer;