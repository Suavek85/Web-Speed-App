import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import SideCard from './SideCard'

describe('SideCard snapshot', () => {

  it('should match the snapshot', () => {
    const spyUseSelector = jest.spyOn(redux, 'useSelector')
    spyUseSelector.mockReturnValue('INACTIVE')
    const wrapper = shallow(<SideCard/>)
    expect(wrapper).toMatchSnapshot()
  })

})