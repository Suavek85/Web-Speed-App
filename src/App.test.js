import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import './App.scss'

it('Should match the snapshot', () => {
  const wrapper = shallow(<App />).debug()
  expect(wrapper).toMatchSnapshot()
})