import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class TrainingProgram extends ApiClient {
  getOne(id, query) {
    return $axios.$get(
      "/training-programs/single/" + id + this.genQuery(query)
    );
  }

  getAll(id, query) {
    return $axios.$get("/training-programs/" + id + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/training-programs", data, this.config);
  }

  update(data) {
    return $axios.$put("/training-programs", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/training-programs/" + id);
  }
}

export default new TrainingProgram();
