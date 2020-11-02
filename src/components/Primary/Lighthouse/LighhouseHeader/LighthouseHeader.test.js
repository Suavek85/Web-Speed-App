import React from 'react'
import { shallow } from 'enzyme'
import LighthouseHeader from './LighthouseHeader'

describe('LighthouseHeader snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<LighthouseHeader />)
    expect(wrapper).toMatchSnapshot()
  })

})