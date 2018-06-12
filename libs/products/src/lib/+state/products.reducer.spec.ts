import { ProductsLoaded } from './products.actions';
import { productsReducer, initialState } from './products.reducer';

describe('productsReducer', () => {
  it('should work', () => {
    const action: ProductsLoaded = new ProductsLoaded({});
    const actual = productsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
