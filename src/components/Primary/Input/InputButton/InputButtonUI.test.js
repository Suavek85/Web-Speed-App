import React from 'react'
import { shallow } from 'enzyme'
import InputButtonUI from './InputButtonUI'

it('Should match the snapshot', () => {
  const wrapper = shallow(<InputButtonUI />)
  expect(wrapper).toMatchSnapshot()
})