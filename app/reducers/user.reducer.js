import {
    USER_DETAILS,
    API_CALL_REQUEST,
    API_CALL_FAILURE,
} from '../actions/types';
import {appDefaultReducer} from './defaultReducer';
const INITIAL_STATE = appDefaultReducer.user;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DETAILS: {
            return {
                ...state,
                userList: action.payload,
                fetching: false
            };
        }
        case API_CALL_REQUEST: {
            return {
                ...state, fetching: true, error: null
            };
        }
        case API_CALL_FAILURE: {
            return {
                ...state, fetching: false, error: action.payload,
            };
        }
        default:
            return state;
    }
};