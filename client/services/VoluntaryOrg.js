import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class VoluntaryOrg extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/voluntary-exp/single/" + id + this.genQuery(query));
  }

  getAll(id, query) {
    return $axios.$get("/voluntary-exp/" + id + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/voluntary-exp", data, this.config);
  }

  update(data) {
    return $axios.$put("/voluntary-exp", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/voluntary-exp/" + id);
  }
}

export default new VoluntaryOrg();
