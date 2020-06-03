import types from "./types";

export const state = () => ({
  notifSnackbar: { show: false, message: "", color: "info", timeout: 6000 }
});

export const mutations = {
  [types.SET_NOTIF_SNACKBAR](state, { show, message, color }) {
    state.notifSnackbar = { show, message, color, timeout: 6000 };
  }
};
