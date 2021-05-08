import {combineReducers, createStore} from 'redux';
import booksReducer from "./books/books-reducer";
import cartReducer from "./cart/cart-reducer";
import searchReducer from './header/search-reducer';

let reducers = combineReducers({
    contentPage: booksReducer,
    cart: cartReducer,
    header: searchReducer
});

const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;