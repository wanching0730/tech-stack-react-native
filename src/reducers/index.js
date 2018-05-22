import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    // store the state returned by LibraryReducer, SelectionReducer
    // initialize our application state
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});