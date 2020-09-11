import React from 'react'
import { shallow } from 'enzyme'
import InputWrapper from './InputWrapper'

it('should match the snapshot', () => {
  const wrapper = shallow(<InputWrapper />)
  expect(wrapper).toMatchSnapshot()
})