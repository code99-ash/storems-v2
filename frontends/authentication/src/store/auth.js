import axios from 'axios'
import { getBaseUrl, isProduction } from '../composables/environ';

const state = () => ({
    loggedIn: false,
    user: null,
    accessToken: localStorage.getItem('auth-token') || null,
})

const actions = {
    async setAccessToken({commit, dispatch}, token) {
        localStorage.setItem('auth-token', token)
        await dispatch('userRequest', token)
        commit('SET_ACCESS_TOKEN', token)
    },
    async userRequest({commit}, token) {
        try {
            const resp = await axios.get(`${getBaseUrl()}/user`, { headers: {
                'Authorization': `Bearer ${token}`,
            } })
            localStorage.setItem('user', JSON.stringify(resp.data.user))
            localStorage.setItem('auth-token', token)
            axios.defaults.headers.common['Authorization'] = token;
            await commit('USER_REQUEST', resp.data)
            await commit('SET_ACCESS_TOKEN', token)

            // redirect to home page
            window.location = isProduction() ? window.location.origin : 'http://localhost:8080'
        } catch(err) {
            localStorage.removeItem('auth-token')
            console.log(err)
        }
    },
    logout({commit}) {
        commit('LOGOUT_USER')
    } 
}
 
const mutations = {
    SET_ACCESS_TOKEN: (state, token) => state.accessToken = token,
    USER_REQUEST: (state, data) => {
        state.user = data;
        state.loggedIn = true
    },
    LOGOUT_USER: (state) => {
        state.loggedIn = false;
        state.accessToken = ''
        localStorage.removeItem('auth-token')
        localStorage.removeItem('user')
    }
}

export default { namespaced: true, state, actions, mutations }