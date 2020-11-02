import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import MainScoreWrapper from './MainScoreWrapper'

it('should match the snapshot', () => {
  const spyUseSelector = jest.spyOn(redux, 'useSelector')
  spyUseSelector.mockReturnValue('INACTIVE')
  const spyUseSelectorLightHouse = jest.spyOn(redux, 'useSelector')
  spyUseSelectorLightHouse.mockReturnValue(null)
  const wrapper = shallow(<MainScoreWrapper />)
  expect(wrapper).toMatchSnapshot()
})