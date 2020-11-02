import React from 'react'
import { shallow } from 'enzyme'
import ToggleSwitch from './ToggleSwitch'

describe('ToggleSwitch snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<ToggleSwitch />)
    expect(wrapper).toMatchSnapshot()
  })

})