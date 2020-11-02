import React from 'react'
import { shallow } from 'enzyme'
import InfoCircle from './InfoCircle'

describe('InfoCircle snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<InfoCircle />)
    expect(wrapper).toMatchSnapshot()
  })

})