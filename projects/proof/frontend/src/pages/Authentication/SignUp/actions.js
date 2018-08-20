/**
 * Had to mock the backend because the rapydo wasn't working with my gmail
 */
import mockBackend from '../../../modules/mockbackend';

const signUpAction = data => ({
  type: 'SIGNUP',
  payload: mockBackend.signup(data),
});

export default signUpAction;
