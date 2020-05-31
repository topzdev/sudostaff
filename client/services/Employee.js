import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class EmployeeApi extends ApiClient {
  getOne(id) {
    return $axios.$get("/employee/" + id);
  }

  getAll(query) {
    console.log(query);
    return $axios.$get("/employee" + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/employee", data, this.config);
  }

  update(data) {
    return $axios.$put("/employee", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/employee/delete/" + id);
  }
}

export default new EmployeeApi();
