import React from 'react'
import { shallow } from 'enzyme'
import LighthouseTabItem from './LighthouseTabItem'

describe('LighthouseTabItem snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<LighthouseTabItem />)
    expect(wrapper).toMatchSnapshot()
  })

})