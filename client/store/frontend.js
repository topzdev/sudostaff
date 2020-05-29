import types from "./types";

export const state = () => ({
  notifSnackbar: { show: true, message: "", color: "info", timeout: 6000 }
});

export const mutations = {
  [types.SET_NOTIF_SNACKBAR](state, options) {
    state.notifSnackbar = { ...options, timeout: 60000 };
  }
};
