import { shallowMount, createLocalVue } from "@vue/test-utils"
import TestCompVuex from './TestCompVuex'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)


describe('Action test', ()=>{
    let actions
    let store

    beforeEach(()=>{
        actions = {
            addData: jest.fn()
        }

        store = new Vuex.Store({
            actions
        })
    })


    it('run action',async()=>{
        const wrapper = shallowMount(TestCompVuex, {store, localVue})
    
        const btn = wrapper.find('button')
        btn.trigger('click')
        expect(actions.addData).toHaveBeenCalled()
    })
})