import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import LighthouseWrapper from './LighthouseWrapper'

describe('LighthouseWrapper snapshot', () => {

  it('should match the snapshot', () => {
    const spyUseSelector = jest.spyOn(redux, 'useSelector')
    spyUseSelector.mockReturnValue(null)
    const wrapper = shallow(<LighthouseWrapper />)
    expect(wrapper).toMatchSnapshot()
  })

})