import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class FamilyDetailsApi extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/benifits/" + id + this.genQuery(query));
  }

  update(data) {
    return $axios.$put("/benifits", data, this.config);
  }
}

export default new FamilyDetailsApi();
