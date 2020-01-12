import React from 'react'
import { shallow } from 'enzyme'
import InputCard from './InputCard'

it('Should match the snapshot', () => {
  const wrapper = shallow(<InputCard />).debug()
  expect(wrapper).toMatchSnapshot()
})