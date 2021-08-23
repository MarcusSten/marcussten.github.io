import TestComponent from './TestComponent'
import { mount } from '@vue/test-utils'

describe('TestComponent', ()=>{
    test('Content of TestComponent', ()=>{
        const wrapper = mount(TestComponent, {
            propsData: {
                message: "Hello from test"
            }
        })
        expect(wrapper.text()).toEqual(
            'This message is: Hello from test'
        )
    })
})