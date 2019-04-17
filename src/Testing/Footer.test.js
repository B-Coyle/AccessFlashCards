import React from 'react';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

  describe('Footer', () => {
      let wrapper;

      beforeEach(()=> {
          wrapper = shallow(
              <Footer />
          );
      });

      it('should match the snapshot with all data passed in', () => {
          expect(wrapper).toMatchSnapshot();
      });
  })