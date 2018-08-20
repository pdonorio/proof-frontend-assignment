import reducer, { initialState } from '../../src/pages/Profile/reducer';
import { PENDING, COMPLETED, ERROR } from '../../src/pages/Profile/constants';

describe('Login Reducer', () => {
  it('should return intial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('should handle', () => {
    it(`${PENDING} state`, () => {
      const expected = { ...initialState, isFetching: true };
      const mockAction = { type: PENDING };
      expect(reducer(initialState, mockAction)).toEqual(expected);
    });

    it(`${COMPLETED} state`, () => {
      const expected = {
        ...initialState, isFetching: false, success: true, error: false, data: '',
      };
      const mockAction = { type: COMPLETED, payload: '' };
      expect(reducer(initialState, mockAction)).toEqual(expected);
    });

    it(`${ERROR} state`, () => {
      const expected = {
        ...initialState, isFetching: false, success: false, error: true, data: '',
      };
      const mockAction = { type: ERROR, payload: { message: '' } };
      expect(reducer(initialState, mockAction)).toEqual(expected);
    });
  });
});
