import React from 'react'
import { shallow } from 'enzyme'
import InputButton from './InputButton'

it('Should match the snapshot', () => {
  const wrapper = shallow(<InputButton />).debug()
  expect(wrapper).toMatchSnapshot()
})
