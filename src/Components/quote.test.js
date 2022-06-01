import React from 'react';
import Quote from './Quote';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
