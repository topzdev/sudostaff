import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class LeaveRequest extends ApiClient {
  getOne(id, query) {
    console.log(query);
    return $axios.$get("/leave-request/" + id + this.genQuery(query));
  }

  getAll(query) {
    console.log(query);
    return $axios.$get("/leave-request" + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/leave-request", data, this.config);
  }

  update(data) {
    return $axios.$put("/leave-request", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/leave-request/delete/" + id);
  }
}

export default new LeaveRequest();
