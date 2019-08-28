import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ResultPage from '../Components/Content/Search/Results/ResultPage';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() })

it('snapshot results', () => {
    const tree = renderer.create(<ResultPage/>).toJSON()
    expect(tree).toMatchSnapshot();
  })