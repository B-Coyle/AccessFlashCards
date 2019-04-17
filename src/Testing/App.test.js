import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App';
import { shallow } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const defaultState = {
  "allQuestions": [], 
  "checked": false, 
  "isLoading": true, 
  "randomQuestion": []}


  describe('App', () => {
      let wrapper;

      beforeEach(()=> {
          wrapper = shallow(
              <App />
          );
      });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 

it('Should have default state properties', () => {
  expect(wrapper.state()).toEqual(defaultState);
});

});
