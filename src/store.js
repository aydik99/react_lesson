import { createStore, applyMiddleware } from "redux";
import reducer from "reducers";
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
    const result = next(action);
    return result;
}



export default createStore(reducer, applyMiddleware(logger, thunk));
