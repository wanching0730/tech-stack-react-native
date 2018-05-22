import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    // store the state returned by LibraryReducer
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});