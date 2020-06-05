import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class FamilyDetailsApi extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/family-details/" + id + this.genQuery(query));
  }

  update(data) {
    return $axios.$put("/family-details", data, this.config);
  }
}

export default new FamilyDetailsApi();
