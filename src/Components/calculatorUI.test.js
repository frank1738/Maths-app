import React from 'react';
import CalculatorUI from './CalculatorUI';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<CalculatorUI />).toJSON();
  expect(tree).toMatchSnapshot();
});
