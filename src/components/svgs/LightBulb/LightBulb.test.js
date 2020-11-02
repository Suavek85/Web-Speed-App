import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import LightBulbUI from './LightBulbUI'

describe('LightBulbUI snapshot', () => {

  it('should match the snapshot', () => {
    const spyUseSelector = jest.spyOn(redux, 'useSelector')
    spyUseSelector.mockReturnValue('INACTIVE')
    const wrapper = shallow(<LightBulbUI />)
    expect(wrapper).toMatchSnapshot()
  })

})