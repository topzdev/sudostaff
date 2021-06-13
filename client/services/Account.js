import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class Account extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/account/" + id);
  }

  updatePassword(data) {
    return $axios.$put("/account/change-password", data);
  }

  updateUsername(data) {
    return $axios.$put("/account/change-username", data);
  }

  reset(data) {
    return $axios.$put("/account/reset", data);
  }

  setAdmin(data) {
    return $axios.$post("/account/set-admin", data);
  }
}

export default new Account();
