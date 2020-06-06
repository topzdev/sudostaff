import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class CivilEligibility extends ApiClient {
  getOne(id, query) {
    return $axios.$get(
      "/civil-eligibility/single/" + id + this.genQuery(query)
    );
  }

  getAll(id, query) {
    return $axios.$get("/civil-eligibility/" + id + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/civil-eligibility", data, this.config);
  }

  update(data) {
    return $axios.$put("/civil-eligibility", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/civil-eligibility/" + id);
  }
}

export default new CivilEligibility();
