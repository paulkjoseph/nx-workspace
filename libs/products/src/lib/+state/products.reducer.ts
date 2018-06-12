import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from '@nx-workspace/data-models';

/**
 * Interface for the 'Products' data used in
 *  - ProductsState, and
 *  - productsReducer
 */
export interface ProductsData {
  loading: boolean;
  products: Product[];
  error: '';
}

/**
 * Interface to the part of the Store containing ProductsState
 * and other information related to ProductsData.
 */
export interface ProductsState {
  readonly products: ProductsData;
}

export const initialState: ProductsData = {
  loading: false,
  products: [],
  error: null
};

export function productsReducer(
  state = initialState,
  action: ProductsActions
): ProductsData {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts: {
      const loading = true;
      return { ...state, loading };
    }

    case ProductsActionTypes.LoadProductsSuccess: {
      const loading = false;
      const products = action.payload;
      return { ...state, loading, products };
    }

    case ProductsActionTypes.LoadProductsFail: {
      const loading = false;
      const products = [];
      const error = action.payload;
      return { ...state, loading, products, error };
    }

    default:
      return state;
  }
}
