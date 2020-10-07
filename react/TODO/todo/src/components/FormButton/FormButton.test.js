import React from 'react';
import { shallow } from 'enzyme';
import FormButton from './FormButton';

describe('<FormButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FormButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
