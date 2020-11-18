import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// importing all the individual reducers
import productsReducer from './modules/products/products-reducer';
import authReducer from './modules/auth/auth-reducer';

// combining the reducers
const rootReducer = combineReducers({
    products: productsReducer,
    auth: authReducer    
})
const composeEnhancers =  compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;