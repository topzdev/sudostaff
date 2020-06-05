import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class AddresstApi extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/address/" + id + this.genQuery(query));
  }

  update(data) {
    return $axios.$put("/address", data, this.config);
  }
}

export default new AddresstApi();
