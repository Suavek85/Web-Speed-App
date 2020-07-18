import React from 'react'
import { shallow } from 'enzyme'
import PrimaryCard from './PrimaryCard'

it('Should match the snapshot', () => {
  const wrapper = shallow(<PrimaryCard />)
  expect(wrapper).toMatchSnapshot()
})