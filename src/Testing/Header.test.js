import React from 'react';
import Header from '../Header/Header';
import { shallow } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockResetGame =  jest.fn()
window.addEventListener = jest.fn()

describe('Header', () => {
let wrapper;

beforeEach(()=> {
    wrapper=shallow(
        <Header 
            resetGame = {mockResetGame}
        />
    );
});

it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should have an event listener on the click start button', () => {
    wrapper.find('input').simulate('click')
    expect(mockResetGame).toHaveBeenCalled();

});

})