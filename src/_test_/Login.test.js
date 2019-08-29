import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Login from '../Components/Login';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() })

it('snapshot login', () => {
    const tree = renderer.create(<Login/>).toJSON()
    expect(tree).toMatchSnapshot();
  })