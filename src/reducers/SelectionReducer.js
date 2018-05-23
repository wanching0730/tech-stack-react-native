// the dispatched action shown up as second parameter here
// at first, there is no selected Library, so set state to null instead of undefined
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;

    }
};