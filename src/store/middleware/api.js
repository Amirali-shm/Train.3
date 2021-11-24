import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    
    const { url, method, onStart, data, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
        const responce = await axios.request({
            baseURL: `http://localhost:8080/api`,
            url,
            method,
            data,
            headers: { 'Content-Type': 'application/json' }, 
            withCredentials: true
        })
        dispatch(actions.apiCallSuccess(responce));
        if (onSuccess) dispatch({ type: onSuccess, payload: responce });
    }
    catch (error) {
        dispatch(actions.apiCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
    }
}

export default api;