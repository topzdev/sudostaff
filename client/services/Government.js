import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class GovernmentAPI extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/goverment-ids/" + id + this.genQuery(query));
  }

  update(data) {
    return $axios.$put("/goverment-ids", data, this.config);
  }
}

export default new GovernmentAPI();
