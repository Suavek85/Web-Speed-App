import React from 'react'
import { shallow } from 'enzyme'
import WebOptimizeUI from './WebOptimizeUI'

it('Should match the snapshot', () => {
  const wrapper = shallow(<WebOptimizeUI />).debug()
  expect(wrapper).toMatchSnapshot()
})