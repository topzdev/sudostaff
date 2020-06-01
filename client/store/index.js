import departmentServices from "@/services/Department";
import designationServices from "@/services/Designation";
import types from "./types";
export const actions = {
  async nuxtServerInit({ commit }) {
    // fetch initialy the departments and designation data for dropdowns
    const departments = await departmentServices.getAll({
      include: ["id", "name"]
    });

    commit("department/" + types.SET_DROPDOWN, departments.data.rows, {
      deep: true
    });

    const designation = await designationServices.getAll({
      include: ["id", "name", "departmentId"],
      withDept: true
    });

    commit("designation/" + types.SET_DROPDOWN, designation.data.rows, {
      deep: true
    });
  }
};
