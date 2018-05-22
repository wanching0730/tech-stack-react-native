// store all action creators which is a 'function'
// action reducer will send all actions to reducers

export const selectLibrary = (libraryId) => {
    // selectLibrary is an 'action creator' (a function)
    // which return an 'action' object with a property 'type'
    return {
        type: 'select_library',
        payload: libraryId
    };
};
 