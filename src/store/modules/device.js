export default {
  namespaced: true,
  state: {
    status_bar_height: 25,
    navbarHeight: 48,
    safeAreaHeight: 10000,
  },
  getters: {},
  mutations: {
    setBarHeight: (state, value) => {
      state.status_bar_height = value
    },
    setNavbar: (state, value) => {
      state.navbarHeight = value
    },
    setSafeAreaHeight: (state, value) => {
      state.safeAreaHeight = value
    }

  },
  actions: {}
}