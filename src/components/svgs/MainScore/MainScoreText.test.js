import React from 'react'
import { shallow } from 'enzyme'
import MainScoreText from './MainScoreText'

it('should match the snapshot', () => {
  const wrapper = shallow(<MainScoreText />)
  expect(wrapper).toMatchSnapshot()
})