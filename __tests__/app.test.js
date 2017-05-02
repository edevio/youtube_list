import React from 'react';
import App from '../src/components/app';
import { mount } from 'enzyme';

describe('App', () => {
  it('Check H1 title showing', () => {
    const app = mount(
      <App />
      );
    const title = app.find('h1');
    expect(title.text()).toBe('Youtube Video List');
  });
});

