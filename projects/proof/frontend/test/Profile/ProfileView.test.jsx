import React from 'react';
import { shallow } from 'enzyme';
import ProfileView from '../../src/pages/Profile/components/ProfileView';
import LoadingScreen from '../../src/components/LoadingScreen';

const initialState = {
  isLoading: false,
  image: '',
  name: '',
  surname: '',
  email: '',
};

const prepareProps = props => ({ ...initialState, ...props });

describe('Profile View Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ProfileView {...initialState} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Loading view displays', () => {
    const props = prepareProps({ isLoading: true });
    const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper.find(LoadingScreen).length).toEqual(1);
    expect(wrapper.find('#main-content').length).toEqual(0);
  });

  it('Content view works', () => {
    const props = prepareProps({ isLoading: false });
    const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper.find(LoadingScreen).length).toEqual(0);
    expect(wrapper.find('#main-content').length).toEqual(1);
  });
});
