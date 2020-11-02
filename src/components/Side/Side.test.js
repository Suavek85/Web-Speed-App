import React from 'react'
import { shallow } from 'enzyme'
import Side from './Side'

describe('Side snapshot', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Side />)
    expect(wrapper).toMatchSnapshot()
  })

})