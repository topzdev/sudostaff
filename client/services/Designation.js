import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class DesignationApi extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/designation/" + id + this.genQuery(query));
  }

  getAll(query) {
    return $axios.$get("/designation" + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/designation", data, this.config);
  }

  update(data) {
    return $axios.$put("/designation", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/designation/delete/" + id);
  }
}

export default new DesignationApi();
