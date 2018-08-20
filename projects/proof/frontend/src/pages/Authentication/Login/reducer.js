import { PENDING, COMPLETED, ERROR } from './constants';

export const initialState = {
  data: null,
  isFetching: false,
  error: false,
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        data: null,
        isFetching: true,
      };
    case COMPLETED:
      return {
        ...state,
        isFetching: false,
        error: false,
        success: true,
        data: action.payload,
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        success: false,
        data: action.payload.message,
      };
    default:
      return state;
  }
};

export default reducer;
