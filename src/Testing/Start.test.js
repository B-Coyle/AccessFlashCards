import React from 'react';
import Start from '../Start/Start';
import { shallow } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockStartGame =  jest.fn()

describe('Start', () => {
let wrapper;

beforeEach(() => {
    wrapper = shallow(
        <Start />
    )
});

  it('Should match rendered snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an event listener on the click start button', () => {
    wrapper.find('input').simulate('click')
    expect(mockStartGame).toHaveBeenCalled();
});

})
