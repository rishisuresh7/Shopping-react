export const fetchSectionsStart = () => {
    return {
        type: 'FETCH_SECTIONS_START'
    }
}

export const fetchSectionsSuccess = (data) => {
    return {
        type: 'FETCH_SECTIONS_SUCCESS',
        payload: data
    }
}

export const fetchSectionsFailure = (error) => {
    return {
        type: 'FETCH_SECTIONS_FAILURE',
        payload: error
    }
}