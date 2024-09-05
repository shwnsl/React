import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  combineSlice  from '../features/counter/counterSlice';
import userSlice from '../features/user/userSlice';

const rootReducer = combineReducers({
    counter : combineSlice,
    user: userSlice,
});

const store = configureStore({
    reducer : rootReducer,
})

export default store;