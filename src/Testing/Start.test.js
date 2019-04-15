import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../Start/Start';
import { shallow } from 'enzyme'; 

describe('Footer', () => {
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
        <Start
        selectedQuestion = {mockQuestion} />
    )
});

it('Should have default states', () => {
    expect(wrapper.state()).toEqual( {
      selectedQuestion: []
    })
  });

  it('Should match rendered snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
