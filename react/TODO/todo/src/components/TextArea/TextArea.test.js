import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TextArea />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
