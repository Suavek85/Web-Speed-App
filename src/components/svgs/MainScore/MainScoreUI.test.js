import React from 'react'
import { shallow } from 'enzyme'
import MainScoreUI from './MainScoreUI'

it('Should match the snapshot', () => {
  const wrapper = shallow(<MainScoreUI />).debug()
  expect(wrapper).toMatchSnapshot()
})