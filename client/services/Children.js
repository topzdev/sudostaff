import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class ChildrensApi extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/childrens/single/" + id + this.genQuery(query));
  }

  getAll(id, query) {
    return $axios.$get("/childrens/" + id + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/childrens", data, this.config);
  }

  update(data) {
    return $axios.$put("/childrens", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/childrens/" + id);
  }
}

export default new ChildrensApi();
