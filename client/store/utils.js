import types from "@/store/types";

export const actions = {
  setNotifError({ commit }, error) {
    console.log(error.response);
    commit(
      "frontend/" + types.SET_NOTIF_SNACKBAR,
      {
        show: true,
        color: "error",
        message: error.response.data.message || "Someting went wrong"
      },
      { root: true }
    );
  },
  setNotifDefault({ commit, dispatch }, { status, message }) {
    if (!status) console.error(message);
    commit(
      "frontend/" + types.SET_NOTIF_SNACKBAR,
      {
        show: true,
        color: status ? "success" : "error",
        message
      },
      { root: true }
    );
  }
};
