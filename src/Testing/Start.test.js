import React from 'react';
import Start from '../Start/Start';
import { shallow } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Start', () => {
let wrapper;
let mockStart = jest.fn();
let mockQuestion = {
    "question": "What is accessibility?",
    "answer": "Is the design and creation of websites that can be used by everyone.",
    "id": 1,
    "category": "Definition"
  }


beforeEach(() => {
    wrapper = shallow(
        <Start />
    )
});

  it('Should match rendered snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
