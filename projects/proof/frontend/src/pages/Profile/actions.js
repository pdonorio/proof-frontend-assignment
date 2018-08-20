/**
 * Had to mock the backend because the rapydo wasn't working with my gmail
 */
import mockBackend from '../../modules/mockbackend';

const profileAction = data => ({
  type: 'PROFILE',
  payload: mockBackend.profile(data),
});

export default profileAction;
