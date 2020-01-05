import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Results from '../src/ui-components/Results/Results';
import InputCard from '../src/ui-components/Input/InputCard/InputCard';
import './App.scss';

it('Should match the snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
});

it('Contains class', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.app__wrapper')).toHaveLength(1)
});

it('Renders Results component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Results).length).toEqual(1);
});

it('Renders InputCard component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(InputCard).length).toEqual(1);
});
