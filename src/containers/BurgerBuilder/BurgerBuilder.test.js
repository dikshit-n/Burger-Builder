import React from 'react'

import { configure, shallow } from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'

import { BurgerBuilder } from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

configure({adapter: new Adaptor()})

describe("<BurgerBuilder />", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />)
    })

    it("Should Render <BuildControls /> when recievign ingredients", () => {
        wrapper.setProps({ings: {salad: 0}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})