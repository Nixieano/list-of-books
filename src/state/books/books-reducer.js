
let initialState = {
    isReady: false,
    items: []
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return{
                ...state,
                items: action.paylod,
                isReady: true
            };
        case 'BOOKS_SORT' :
            return{
                ...state,
                items: action.price,
                isReady: true
            }
        case 'SEARCH-RESULT' :
                return state
        default:
            return state
    }

};

export const setBooks = (paylod) => ({ type: 'SET_BOOKS', paylod });
export const booksSort = (price) => ({ type: 'BOOKS_SORT', price });
export const searchResult = (result) => ({ type: 'SEARCH-RESULT', result });

export default booksReducer;