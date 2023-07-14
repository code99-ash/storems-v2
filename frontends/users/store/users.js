import { centralBase } from '@/utils';
export const state = () => ({
    cartAmount: '0.00',
    cartItems: [],
    orders: []
})

export const actions = {
    // Products and Cart
    async fetchOrders({commit}, id) {
        const response = await this.$axios.get(`${centralBase}/orders/history/${id}`);
        commit('SET_ORDERS', response.data)
    },
    updateOrderStatus({commit}, payload) {
        commit('UPDATE_ORDERS', payload)
    },
  
    updateCart({commit}, payload) {
        commit('UPDATE_CART', payload)
    },
    removeFromCart({commit}, id) {
        commit('REMOVE_FROM_CART', id)
        this.dispatch('cummulateCart')
    },
    async getCartItems({commit}) {
        let items = localStorage.getItem('cart');
        items = items? JSON.parse(items) : []
        
        commit('GET_CART_ITEMS', items)
        this.dispatch('cummulateCart')
    },

    cummulateCart({commit}) {
        commit('CUMMULATE_CART')
    },

    // Feedbacks
    removeFeedback({commit}, id) {
        commit('REM_FEEDBACK', id)
    },
    addFeedback({commit}, payload) {
        commit('ADD_FEEDBACK', payload)
    },


}

export const mutations = {
    // products & Cart
    SET_PRODUCTS(state, payload) {
        state.products = payload
    },
      
    SET_ORDERS(state, payload) {
        console.log(payload)
        state.orders = payload
    },

    UPDATE_ORDERS(state, {ids, status}) {
        state.orders = state.orders.map(each => ids.includes(each._id)? {...each, status} : each)
    },
  
    UPDATE_CART(state, payload) {
        const existing = state.cartItems.find(c => c._id == payload._id);
        if(existing) {
            if(existing.quantity !== payload.quantity) {
            existing.quantity = payload.quantity;
            state.cartItems = state.cartItems.map(c => c._id == payload._id? existing : c);
            }
        }else {
            state.cartItems.push(payload)
        }

        state.cartAmount = state.cartItems.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quantity);
        }, 0);

        localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
  
    REMOVE_FROM_CART(state, id) {
        state.cartItems = state.cartItems.filter(each => each._id !== id);
        
        const amount = state.cartItems.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quantity);
        }, 0);
        
        state.cartAmount = amount == 0? '0.00':amount
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
  
    GET_CART_ITEMS: (state, data) => {
        state.cartItems = data;
    },
    CUMMULATE_CART(state) {
        state.cartAmount = state.cartItems.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quantity);
        }, 0);
    },
}