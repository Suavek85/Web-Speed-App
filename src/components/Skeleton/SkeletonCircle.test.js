import React from 'react'
import { shallow } from 'enzyme'
import SkeletonCircle from './SkeletonCircle'

describe('SkeletonCircle snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<SkeletonCircle />)
    expect(wrapper).toMatchSnapshot()
  })

})