import React from 'react';
import { ReactDOM } from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import {RouterComponent} from '../App';
import NavigationBar from '../Components/Content/NavigationBar';

Enzyme.configure({ adapter: new Adapter() })


it('snapshot navigation', () => {

    const tree = renderer.create(
    <MemoryRouter>
    <NavigationBar/>
  </MemoryRouter>
  ).toJSON()
    expect(tree).toMatchSnapshot();
  })
  
//   it('renders NavBar component', () => {
//     const wrapper = shallow(<RouterComponent />);
//     const content = <NavigationBar />;
//     expect(wrapper.contains(content)).toEqual(true);
//   });