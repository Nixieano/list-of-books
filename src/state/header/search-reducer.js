const initialState = {
    searchBook: '',
    searchResult: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOK':
            return {
                ...state,
                searchBook: action.paylod
            }
        case 'SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.paylod
            }
        default:
            return state
    }

};

export const searchBook = (paylod) => ({ type: 'SEARCH_BOOK', paylod });
export const searchResult = (paylod) => ({ type: 'SEARCH_RESULT', paylod });

export default searchReducer;