import types from "./types";

export const state = () => ({
  notifSnackbar: { show: false, message: "", color: "info" },
  navbar: false,
  sidebar: false
});

export const mutations = {
  [types.SET_NOTIF_SNACKBAR](state, { show, message, color }) {
    state.notifSnackbar = { show, message, color };
  },
  [types.SHOW_NAVBAR](state, show) {
    state.navbar = show;
  },
  [types.SHOW_SIDEBAR](state, show) {
    state.navbar = show;
  }
};

export const actions = {
  showNavigationBar({ commit }, show) {
    commit(types.SHOW_NAVBAR, show);
    commit(types.SHOW_SIDEBAR, show);
  },
  showPushNotif({ commit }, { show, message, color }) {
    commit(types.SET_NOTIF_SNACKBAR, { show, message, color });
  }
};
