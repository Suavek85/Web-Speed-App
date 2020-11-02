import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import ScoreCircle from './ScoreCircle'

describe('ScoreCircle snapshot', () => {

  it('should match the snapshot', () => {
    const spyUseSelector = jest.spyOn(redux, 'useSelector')
    spyUseSelector.mockReturnValue('INACTIVE')
    const wrapper = shallow(<ScoreCircle />)
    expect(wrapper).toMatchSnapshot()
  })

})