import { centralBase } from '@/utils';
export const state = () => ({
    data: [
      {
        id: 1,
        title: 'Christmas pudding Custard English cuisine Mince pie',
        image: 'cake.png',
        price: 850
      },
      {
        id: 2,
        title: 'Hut Sushi Pizza',
        image: 'pizza.png',
        price: 2500
      },
    ],
    fetched: false,
})

export const actions = {
    // Products and Cart
      async fetchProducts({commit}) {
        try {
          const response = await this.$axios.get(`${centralBase}/products`);
          commit('SET_PRODUCTS', response.data)
          commit('ACCEPT_FETCH', true)
        } catch(err) {
            commit('ACCEPT_FETCH', false)
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
    ACCEPT_FETCH(state, bool) {
      state.fetched = bool
    },
    SET_PRODUCTS(state, payload) {
      // console.log(payload)
      state.products = payload
    },
    UPDATE_ORDERS(state, {ids, status}) {
      state.orders = state.orders.map(each => ids.includes(each._id)? {...each, status} : each)
    },

    ADD_PRODUCT(state, payload) {
      state.products.push(payload)
    },

    REMOVE_PRODUCT(state, id) {
      state.products = state.products.filter(each => each._id !== id)
    },
  
}