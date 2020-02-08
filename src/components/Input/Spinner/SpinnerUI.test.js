import React from 'react'
import { shallow } from 'enzyme'
import SpinnerUI from './SpinnerUI'

it('Should match the snapshot', () => {
  const wrapper = shallow(<SpinnerUI />)
  expect(wrapper).toMatchSnapshot()
})