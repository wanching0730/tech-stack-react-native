import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    // store the state returned by LibraryReducer
    libraries: () => LibraryReducer
});