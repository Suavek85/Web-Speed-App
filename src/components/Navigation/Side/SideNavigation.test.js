import * as React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import SideNavigation from './SideNavigation.jsx'
import { navigationStates } from '../../../constants/navigationStates'

describe('SideNavigation snapshot', () => {

  it('should match the snapshot', () => {
    const spyUseSelector = jest.spyOn(redux, 'useSelector')
    const mockDispatch = jest.fn();
    const spyUseDispatch = jest.spyOn(redux, 'useDispatch')
    spyUseSelector.mockReturnValue(navigationStates.EXPAND)
    spyUseDispatch.mockReturnValue(mockDispatch)
    const wrapper = shallow(<SideNavigation />)
    expect(wrapper).toMatchSnapshot()
  })

})
