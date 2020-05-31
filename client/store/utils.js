import types from "@/store/types";
import { state } from "./department";

export const actions = {
  setNotifError({ commit }, error) {
    console.error(error);
    commit(
      "frontend/" + types.SET_NOTIF_SNACKBAR,
      { show: true, color: "error", message: "Someting went wrong" },
      { root: true }
    );
  },
  setNotifDefault({ commit }, { status, message }) {
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
