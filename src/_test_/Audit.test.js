import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Audit from '../Components/Content/Audit';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() })

it("render a prop", () => {
  const wrapper = shallow(<Audit dataSent="[]" />);
  expect(wrapper.instance().props.dataSent).toEqual("[]");
  expect(wrapper).toMatchSnapshot();
});

it('snapshot Audit', () => {
  const tree = renderer.create(<Audit/>).toJSON()
  expect(tree).toMatchSnapshot();
})