import React from 'react'
import { shallow } from 'enzyme'
import WebOptimize from './WebOptimize'

it('Should match the snapshot', () => {
  const wrapper = shallow(<WebOptimize />).debug()
  expect(wrapper).toMatchSnapshot()
})
