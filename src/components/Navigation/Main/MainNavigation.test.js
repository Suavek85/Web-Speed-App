import React from 'react'
import { shallow } from 'enzyme'
import MainNavigation from './MainNavigation'

it('Should match the snapshot', () => {
  const wrapper = shallow(<MainNavigation />)
  expect(wrapper).toMatchSnapshot()
})