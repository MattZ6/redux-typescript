import { Reducer } from 'redux';
import produce from 'immer';

import { ICartState, CartActionActionTypes } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CartActionActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const index = draft.items.findIndex(
          item => item.product.id === product.id
        );

        if (index >= 0) {
          draft.items[index].quantity++;
        } else {
          draft.items.push({ product, quantity: 1 });
        }

        break;
      }

      case CartActionActionTypes.addProductToCartFailure: {
        const { productId } = action.payload;

        draft.failedStockCheck.push(productId);

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
