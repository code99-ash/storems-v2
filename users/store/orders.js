import { centralBase } from '@/utils';
export const state = () => ({
    orders: []
})

export const actions = {
    async fetchOrders({commit}, id) {
        const response = await this.$axios.get(`${centralBase}/orders/history/${id}`);
        commit('SET_ORDERS', response.data)
    },
    updateOrderStatus({commit}, payload) {
        commit('UPDATE_ORDERS', payload)
    },
}
export const mutations = {
    SET_ORDERS(state, payload) {
    console.log(payload)
    state.orders = payload
    },
    UPDATE_ORDERS(state, {ids, status}) {
    state.orders = state.orders.map(each => ids.includes(each._id)? {...each, status} : each)
    },
}