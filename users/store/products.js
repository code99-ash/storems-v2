import { env } from '@/utils';
export const state = () => ({
    data: [],
})

export const actions = {
    // Products and Cart
    async fetchProducts({commit}) {
      try {
        const response = await this.$axios.$get(`/products`);
        // console.log(response)
        commit('SET_PRODUCTS', response)
      }catch(err) {
        console.log(err)
      }
    },
    addProduct({commit}, payload) {
      commit('ADD_PRODUCT', payload)
    },
    removeProduct({commit}, payload) {
      commit('REMOVE_PRODUCT', payload)
    },
  
}

export const mutations = {
    // products & Cart
    SET_PRODUCTS(state, payload) {
      // console.log(payload)
      state.data = payload
    },
    UPDATE_ORDERS(state, {ids, status}) {
      state.orders = state.orders.map(each => ids.includes(each._id)? {...each, status} : each)
    },

    ADD_PRODUCT(state, payload) {
      state.data.push(payload)
    },

    REMOVE_PRODUCT(state, id) {
      state.data = state.data.filter(each => each._id !== id)
    },
  
}