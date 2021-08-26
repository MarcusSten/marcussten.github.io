import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categories: []
    },
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = [...payload, ...state.paymentsList]
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload)
        },
        setCategoriesListData(state, payload) {
            state.categories = [...state.categories, ...payload]
        },
        addCategoryToList(state, payload) {
            state.categories.push(payload)
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur)=>res + cur.value, 0)
        },
        getCategories: state => state.categories
    },
    actions: {
        fetchData({commit}) {
            if(this.state.paymentsList.length) return 
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = []
                    const getCategoryRandom = ['Sport', 'Food', "Education", 'Internet', 'Other']
                    for (let i = 0; i < 20; i++) {
                        items.push({
                            date: Math.floor(Math.random() * 30) + '.' + Math.floor(Math.random() * 12) + '.' + Math.floor(Math.random() * (2021 - 2020) + 2020),
                            category: getCategoryRandom[Math.floor(Math.random() * getCategoryRandom.length)],
                            value: Math.floor(Math.random() * (1500 - 100) + 100),
                            id: i + 1,
                        })
                    }
                    resolve(items)
                },1000)
            })
            .then(res=> commit('setPaymentListData', res))
        },
        fetchCategoryList({commit}) {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const categories = ['Sport', 'Food', "Education", 'Internet', 'Other'];
        
                    resolve(categories)
                },2000)
            })
            .then(res=> commit('setCategoriesListData', res))
        },
    },
})