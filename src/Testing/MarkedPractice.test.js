import React from 'react';
import MarkedPractice from '../MarkedPractice/MarkedPractice';
import { shallow } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockDisplayPractice = jest.fn()
const mockCheckIfFlipped = jest.fn()
const mockStateFlipped = false
const mockData = []

describe('MarkedPractice', () => {
let wrapper;

beforeEach(() => {
    wrapper= shallow(
        <MarkedPractice 
            isFlipped = {mockStateFlipped}
            displayNextCard = {mockDisplayPractice}
            flipCard= {mockCheckIfFlipped}
        /> 
    )
});
it('should have a default state', () => {
    
})

it('should match rendered snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an event listener on the click start button', () => {
    wrapper.find('article').childAt(1).simulate('click')
    expect(mockDisplayPractice).toHaveBeenCalled();
});


})