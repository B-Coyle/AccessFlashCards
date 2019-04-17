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
const resetGameMock = jest.fn()
const randomQuestion = mockQuestions[0]
const mockQuestions ={
        question: "What is accessibility?",
        answer: "Is the design and creation of websites that can be used by everyone.",
        id: 1,
        category: "Definition"
        }

  describe('Card', () => {
      let wrapper;

      beforeEach(()=> {
          wrapper = shallow(
              <Card 
                randomQuestion = {randomQuestion}
                allQuestions = {mockQuestions}
                nextCard = {mockDisplayNextCard}
                practice = {[]}
                goodToGo = {[]}
                resetGame= {resetGameMock}
              />
          );
      });

    it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
    });

    it('Should have default state properties', () => {
        expect(wrapper.state()).toEqual(defaultState);
      });

    it.only('should have an event listener to update localStorage choices', () => {
        wrapper.instance().updateStudyList = mockUpdateStudyList
        
        wrapper.setState({ isFlipped: true })
        expect(wrapper.state('isFlipped')).toEqual(true)

        const greatBtn = wrapper.find('.greatBtn')

        greatBtn.simulate('click')

        expect(mockUpdateStudyList).toHaveBeenCalled();
        expect(mockUpdateStudyList).toHaveBeenCalledTimes(1);
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