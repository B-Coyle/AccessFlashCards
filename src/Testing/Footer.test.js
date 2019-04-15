import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme'; 

  describe('Footer', () => {
      let wrapper;

      beforeEach(()=> {
          wrapper = shallow(
          );
      });

      it('should match the snapshot with all data passed in', () => {
          expect(wrapper).toMatchSnapshot();
      });


  })