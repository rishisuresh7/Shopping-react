const INIT_STATE = {
  isFetching: true,
  isError: null
}


const directoryReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'FETCH_SECTIONS_START':
          return {
            ...state,
            sections: [],
            isFetching: true,
            error: null
          }
        case 'FETCH_SECTIONS_SUCCESS':
          return {
            ...state,
            sections: action.payload,
            isFetching: false,
            error: null
          }
        case 'FETCH_SECTIONS_FAILURE':
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };
        default: return state
    }
}

export default directoryReducer;