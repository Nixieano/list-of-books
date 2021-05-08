const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.some(cartItem => cartItem.id === action.paylod.id)) {
                return state.map(cartItem => (
                    cartItem.id === action.paylod.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
                ))
            }
            return [...state, { ...action.paylod, count: 1 }]
        case 'UP_PRODUCT_CART':
            return state.map(cartItem => (cartItem.id === action.paylod.id ?
                { ...cartItem, count: cartItem.count + 1 }: 
                cartItem));
        case 'DOWN_PRODUCT_CART':
            return state.map(cartItem => (cartItem.id === action.paylod.id ?
                { ...cartItem, count: cartItem.count - 1 }
                : cartItem)).filter(cartItem => cartItem.count > 0);
        case 'DELET_PRODUCT_CART':
            return state.filter(cartItem => cartItem.id !== action.id);
        case 'HIDDEN_CART':
            return {
                ...state,
                hidden: action.hidden
            };
        default:
            return state
    }

};

export const addToCart = (paylod) => ({ type: 'ADD_TO_CART', paylod });
export const hiddenCart = (hidden) => ({ type: 'HIDDEN_CART', hidden });
export const udateCart = (count) => ({ type: 'UPDATE_CART', count });
export const downProductCart = (paylod) => ({ type: 'DOWN_PRODUCT_CART', paylod });
export const upProductCart = (paylod) => ({ type: 'UP_PRODUCT_CART', paylod });
export const deletProductCart = (id) => ({ type: 'DELET_PRODUCT_CART', id });

export default cartReducer;