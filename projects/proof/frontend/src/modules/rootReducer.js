import { combineReducers } from 'redux';
import LoginReducer from '../pages/Authentication/Login/reducer';
import SignUpReducer from '../pages/Authentication/SignUp/reducer';
import ProfileReducer from '../pages/Profile/reducer';

export default combineReducers({
  LoginReducer,
  SignUpReducer,
  ProfileReducer,
});
