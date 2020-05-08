const directoryReducer = (state = {}, action) => {
    switch(action.type) {
        case 'INIT_DIRECTORY':
          return {
            ...state,
            sections: action.payload
          };
        default: return state
    }
}

export default directoryReducer;