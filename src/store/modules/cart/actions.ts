import { IAction } from '../types';
import { CartActionActionTypes, IProduct } from './types';

export function addProductToCartRequest(
  product: IProduct
): IAction<CartActionActionTypes> {
  return {
    type: CartActionActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(
  product: IProduct
): IAction<CartActionActionTypes> {
  return {
    type: CartActionActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(
  productId: number
): IAction<CartActionActionTypes> {
  return {
    type: CartActionActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
