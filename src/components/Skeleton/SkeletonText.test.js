import React from 'react'
import { shallow } from 'enzyme'
import SkeletonText from './SkeletonText'

describe('SkeletonText snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<SkeletonText />)
    expect(wrapper).toMatchSnapshot()
  })

})