import React from 'react';
import { shallow } from 'enzyme';
import { PureProfile } from '../../src/pages/Profile';
import { initialState } from '../../src/pages/Profile/reducer';

const prepareProps = props => ({ ...initialState, ...props });

describe('Profile Component', () => {
  describe('Disconnected component', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<PureProfile />, { disableLifecycleMethods: true });
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('Connected component', () => {
    it('renders without crashing', () => {
      const props = prepareProps({});
      const mockLoginFunction = jest.fn();
      const wrapper = shallow(<PureProfile
        {...props}
        profileAction={mockLoginFunction}
      />);
      expect(wrapper.length).toEqual(1);
    });

    it('profileAction works', () => {
      const props = prepareProps({});
      const mockLoginFunction = jest.fn();
      const wrapper = shallow(<PureProfile
        {...props}
        profileAction={mockLoginFunction}
      />);
      wrapper.instance().props.profileAction();
      expect(mockLoginFunction).toHaveBeenCalled();
    });
  });
});
