/**
 * Had to mock the backend because the rapydo wasn't working with my gmail
 */
import mockBackend from '../../../modules/mockbackend';

const loginAction = data => ({
  type: 'LOGIN',
  payload: mockBackend.login(data),
});

export default loginAction;
