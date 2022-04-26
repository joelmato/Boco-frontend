import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: true,
    token: '',
    myUserId: '',
  },
  getters: {
  },
  mutations: {
    SET_STATUS(state, status) {
      state.loggedIn = status;
    },
    SET_MYUSERID(state, id) {
      state.myUserId = id;
    },
  },
  actions: {
  },
  modules: {
  }
})
