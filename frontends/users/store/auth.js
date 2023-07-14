import { authBase } from '@/utils';

export const state = ()     => ({
    accessToken: '',
    loggedIn: false,
    user: '',
    openAuth: false,
    authType: 'login'
})

export const actions = {
    async setAccessToken({commit, dispatch}, token) {
        // console.log(token)
        localStorage.setItem('auth-token', token)
        await dispatch('userRequest', token)
        commit('SET_ACCESS_TOKEN', token)
    },
    async userRequest({commit}, token) {
        try {
            const resp = await this.$axios.get(`${authBase}/user`, { headers: {
                'Authorization': `Bearer ${token}`,
            } })
            localStorage.setItem('user', JSON.stringify(resp.data.user))
            localStorage.setItem('auth-token', token)
            this.$axios.defaults.headers.common['Authorization'] = token;
            await commit('SET_USER_DATA', {user: resp.data.user, token})
        } catch(err) {
            console.log(err)
            localStorage.removeItem('auth-token')
        }
    },
    logout({commit}) {
        commit('LOGOUT_USER')
    },
    setOpenAuth({commit}, val) {
        commit('SET_OPENAUTH', val)
    },
    setAuthType({commit}, type) {
        commit('SET_AUTHTYPE', type)
    }
}

export const mutations = {
    SET_USER_DATA(state, {user, token}) {
        state.user = user
        state.accessToken = token
        state.loggedIn = true
    },
    SET_OPENAUTH(state, val) {
        state.openAuth = val ?? false;
        if(!!val) {
            state.authType = 'login'
        }
    },
    SET_AUTHTYPE(state, type) {
        state.authType = type
    },
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