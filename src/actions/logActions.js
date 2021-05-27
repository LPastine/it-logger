import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// Example of an action in a way that's easier to understand
// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

// Get logs from server - How's actually done
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};