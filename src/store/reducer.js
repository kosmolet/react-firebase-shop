/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
export const initialState = {
  cart: [],
  user: null
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price * item.amount + amount, 0);

export const findProductInCart = (cart, productObj) => {
  const foundProduct = cart.find((cartItem) => cartItem.id === productObj.item.id);
  const index = cart.findIndex((cartItem) => cartItem.id === productObj.item.id);
  return { foundProduct, index };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { foundProduct, index } = findProductInCart(state.cart, action);
      const newCartState = [...state.cart];
      if (foundProduct) {
        const updatedProduct = { ...foundProduct, amount: foundProduct.amount + 1 };
        newCartState.splice(index, 1);
        const newState = [...newCartState, updatedProduct];
        return {
          ...state,
          cart: newState
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.item]
      };
    }
    case 'REMOVE_FROM_CART': {
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      const newCartState = [...state.cart];

      if (index >= 0) {
        newCartState.splice(index, 1);
      } else {
        // eslint-disable-next-line no-console
        console.warn(`Can't remove product (id: ${action.id}) as its not in the cart`);
      }
      return {
        ...state,
        cart: newCartState
      };
    }

    case 'REDUCE_IN_CART': {
      const { foundProduct, index } = findProductInCart(state.cart, action);
      if (foundProduct && foundProduct.amount > 0) {
        const newCartState = [...state.cart];
        const updatedProduct = { ...foundProduct, amount: foundProduct.amount - 1 };
        newCartState.splice(index, 1);
        const newState = [...newCartState, updatedProduct];
        return {
          ...state,
          cart: newState
        };
      }
      return {
        ...state
      };
    }

    case 'EMPTY_CART':
      return {
        ...state,
        cart: []
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
