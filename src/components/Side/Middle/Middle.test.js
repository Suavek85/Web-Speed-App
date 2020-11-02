import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import Middle from './Middle'

describe('Middle snapshot', () => {

  it('should match the snapshot', () => {
    const mockedResponse = [0.67, 0.47, "https://www.bbc.com/", "SLOW", "AVERAGE", "FAST", 0.98]
    const spyUseSelector = jest.spyOn(redux, 'useSelector')
    spyUseSelector.mockReturnValue(mockedResponse)
    const wrapper = shallow(<Middle />)
    expect(wrapper).toMatchSnapshot()
  })

})