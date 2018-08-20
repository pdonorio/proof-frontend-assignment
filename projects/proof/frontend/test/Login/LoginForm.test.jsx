import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../src/pages/Authentication/Login/Form';

const initialState = {
  email: '',
  password: '',
  loading: false,
  errorMessage: '',
};

const prepareProps = props => ({ ...initialState, ...props });

describe('Login Form Component', () => {
  it('renders without crashing', () => {
    const mockSetFieldFunc = jest.fn();
    const mockSubmitFormFunc = jest.fn();
    const wrapper = shallow(<Form
      {...initialState}
      setField={mockSetFieldFunc}
      submitForm={mockSubmitFormFunc}
    />);
    expect(wrapper.find('p.error-text').length).toBe(0);
    expect(wrapper.length).toEqual(1);
  });
  it('displays error message', () => {
    const props = prepareProps({ errorMessage: 'Some error' });
    const mockSetFieldFunc = jest.fn();
    const mockSubmitFormFunc = jest.fn();
    const wrapper = shallow(<Form
      {...props}
      setField={mockSetFieldFunc}
      submitForm={mockSubmitFormFunc}
    />);
    expect(wrapper.find('p.error-text').length).toBe(1);
  });
  it('submit function gets called', () => {
    const mockSetFieldFunc = jest.fn();
    const mockSubmitFormFunc = jest.fn();
    const wrapper = shallow(<Form
      {...initialState}
      setField={mockSetFieldFunc}
      submitForm={mockSubmitFormFunc}
    />);
    const loginButton = wrapper.find('button.dark-white-text.link-like.clickable');
    loginButton.simulate('click');
    expect(mockSubmitFormFunc).toHaveBeenCalled();
  });
});
