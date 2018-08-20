import React from 'react';
import { shallow } from 'enzyme';
import { PureLogin } from '../../src/pages/Authentication/Login';
import { initialState } from '../../src/pages/Authentication/Login/reducer';

const prepareProps = props => ({ ...initialState, ...props });

describe('Login Component', () => {
  describe('Disconnected component', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<PureLogin />, { disableLifecycleMethods: true });
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('Connected component', () => {
    it('renders without crashing', () => {
      const props = prepareProps({});
      const mockLoginFunction = jest.fn();
      const wrapper = shallow(<PureLogin
        {...props}
        loginAction={mockLoginFunction}
      />);
      expect(wrapper.length).toEqual(1);
    });

    it('loginAction works', () => {
      const props = prepareProps({});
      const mockLoginFunction = jest.fn();
      const wrapper = shallow(<PureLogin
        {...props}
        loginAction={mockLoginFunction}
      />);
      wrapper.instance().props.loginAction();
      expect(mockLoginFunction).toHaveBeenCalled();
    });
  });
});
