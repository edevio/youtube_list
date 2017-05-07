import React from 'react';
import App from '../src/components/app';
import renderer from 'react-test-renderer';

it('Display the Correct H1', () => {
  const tree = renderer.create(
    <App></App>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

