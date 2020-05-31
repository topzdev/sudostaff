import store from "./storeClient";

export default function(error) {
  console.error(error, store);
  store.dispatch(
    "frontend/" + types.SET_NOTIF_SNACKBAR,
    { show: true, color: "error", message: "Someting went wrong" },
    { root: true }
  );
}
