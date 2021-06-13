import { $axios } from "@/utils/axios";
import ApiClient from "./ApiClient";

class Dashboard extends ApiClient {
  getCounts() {
    return $axios.$get("/dashboard/counts");
  }

  getRecentAddedEmployee() {
    return $axios.$get("/dashboard/recentEmployee");
  }

  getActiveLeaveRequest() {
    return $axios.$get("/dashboard/activeLeave");
  }
}

export default new Dashboard();
