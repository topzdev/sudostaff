import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class Account extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/account/" + id + this.genQuery(query));
  }

  updatePassword(data) {
    return $axios.$put("/account/change-password", data);
  }

  updateUsername(data) {
    return $axios.$put("/account/change-username", data);
  }
}

export default new Account();
