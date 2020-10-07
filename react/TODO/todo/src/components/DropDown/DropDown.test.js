import React from 'react';
import { shallow } from 'enzyme';
import DropDown from './DropDown';

describe('<DropDown />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DropDown />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
