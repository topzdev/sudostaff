import { setStore } from "~/utils/storeClient";

export default ({ app, store }) => {
  console.log(store);
  setStore(store);
};
