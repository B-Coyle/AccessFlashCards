import React from 'react';
import Card from '../Card/Card';
import { shallow } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultState = {
    "isFlipped": false,
    "answered": false,
  }

const mockUpdateStudyList = jest.fn()
const mockFlip = jest.fn()
const mockDisplayNextCard = jest.fn()


  describe('Card', () => {
      let wrapper;

      beforeEach(()=> {
          wrapper = shallow(
              <Card />
          );
      });

    it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
    });

    it('Should have default state properties', () => {
        expect(wrapper.state()).toEqual(defaultState);
      });

    it('should have an event listener to update localStorage choices', () => {
        wrapper.find('.greatBtn').simulate('click')
        expect(mockUpdateStudyList).toHaveBeenCalled();
    });

    it('should have an event listener on the next button to display the next card', () => {
        wrapper.find('.nextBtn').simulate('click')
        expect(mockDisplayNextCard).toHaveBeenCalled();
    });
    it('should have an event listener on the flip button to display the answer', () => {
        wrapper.find('.flipBtn').simulate('click')
        expect(mockDisplayNextCard).toHaveBeenCalled();
    });
    })