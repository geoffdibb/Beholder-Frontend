import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Homepage from '../Components/Content/Homepage';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() })
