import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class EmployeeApi extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/employee/" + id + this.genQuery(query));
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

  checkId(id) {
    return $axios.$get("/employee/check/" + id);
  }
}

export default new EmployeeApi();
