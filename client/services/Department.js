import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class DepartmentApi extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/department/" + id + this.genQuery(query));
  }

  getAll(query) {
    return $axios.$get("/department" + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/department", data, this.config);
  }

  update(data) {
    return $axios.$put("/department", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/department/delete/" + id);
  }
}

export default new DepartmentApi();
