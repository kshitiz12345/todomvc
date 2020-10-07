import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './InputBox';

describe('<InputBox />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputBox />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
