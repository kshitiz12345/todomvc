import React from 'react';
import { shallow } from 'enzyme';
import DataList from './DataList';

describe('<DataList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DataList />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
