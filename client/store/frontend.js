import types from "./types";

export const state = () => ({
  notifSnackbar: { show: false, message: "", color: "info", timeout: 6000 }
});

export const mutations = {
  [types.SET_NOTIF_SNACKBAR](state, options) {
    state.notifSnackbar = { ...options, timeout: 6000 };
  }
};
