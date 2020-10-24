import React from 'react'
import { shallow } from 'enzyme'
import Primary from './Primary'

it('Should match the snapshot', () => {
  const wrapper = shallow(<Primary />)
  expect(wrapper).toMatchSnapshot()
})