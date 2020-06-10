import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class LeaveRequest extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/leave-request/" + id + this.genQuery(query));
  }

  getAllByEmployee(id, query) {
    return $axios.$get("/leave-request/employee/" + id + this.genQuery(query));
  }

  getSummaryEmployee(id) {
    return $axios.$get("/leave-request/employee/summary/" + id);
  }

  getSummaryAdmin() {
    return $axios.$get("/leave-request/admin/summary/");
  }

  getAll(query) {
    return $axios.$get("/leave-request" + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/leave-request", data, this.config);
  }

  update(data) {
    return $axios.$put("/leave-request", data, this.config);
  }

  updateAdmin(data) {
    return $axios.$put("/leave-request/admin", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/leave-request/delete/" + id);
  }
}

export default new LeaveRequest();
