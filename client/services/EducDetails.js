import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class EducDetails extends ApiClient {
  getOne(id, query) {
    return $axios.$get(
      "/educational-background/single/" + id + this.genQuery(query)
    );
  }

  getAll(id, query) {
    return $axios.$get("/educational-background/" + id + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/educational-background", data, this.config);
  }

  update(data) {
    return $axios.$put("/educational-background", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/educational-background/" + id);
  }
}

export default new EducDetails();
