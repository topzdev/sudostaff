import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class LeaveType extends ApiClient {
  getOne(id, query) {
    return $axios.$get("/leave-type/" + id + this.genQuery(query));
  }

  getAll(query) {
    console.log(query);
    return $axios.$get("/leave-type" + this.genQuery(query));
  }

  create(data) {
    return $axios.$post("/leave-type", data, this.config);
  }

  update(data) {
    return $axios.$put("/leave-type", data, this.config);
  }

  delete(id) {
    return $axios.$delete("/leave-type/delete/" + id);
  }
}

export default new LeaveType();
