import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import Homepage from '../Components/Content/Homepage';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot App', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot();
})