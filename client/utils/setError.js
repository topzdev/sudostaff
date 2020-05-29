import store from "@/store";
import types from "@/store/types";

export default function(error) {
  console.error("ERROR:" + error);
  store().commit(
    "frontend/" + types.SET_NOTIF_SNACKBAR,
    { show: true, color: "error", message: "Someting went wrong" },
    { root: true }
  );
}
