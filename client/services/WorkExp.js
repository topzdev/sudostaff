import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class WorkExp extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/work-exp/single/" + id + this.genQuery(query));
  }

  getAll(id, query) {
    return $axios.$get("/work-exp/" + id + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/work-exp", data, this.config);
  }

  update(data) {
    return $axios.$put("/work-exp", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/work-exp/" + id);
  }
}

export default new WorkExp();
