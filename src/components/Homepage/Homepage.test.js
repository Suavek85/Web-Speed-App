import React from 'react'
import { shallow } from 'enzyme'
import Homepage from './Homepage'

it('Should match the snapshot', () => {
  const wrapper = shallow(<Homepage />)
  expect(wrapper).toMatchSnapshot()
})