import React from 'react'
import { shallow } from 'enzyme'
import LighthouseTabs from './LighthouseTabs'

describe('LighthouseTabContent snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<LighthouseTabs />)
    expect(wrapper).toMatchSnapshot()
  })

})