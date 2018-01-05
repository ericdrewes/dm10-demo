import {createStore, applyMiddleware} from'redux';
import promiseMiddleware from 'redux-promise-middleware';

import users from './ducks/users';


const store = createStore(users, applyMiddleware(promiseMiddleware()))

export default store;