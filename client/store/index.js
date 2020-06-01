import departmentServices from "@/services/Department";
import types from "./types";
export const actions = {
  async nuxtServerInit({ commit }) {
    const departments = await departmentServices.getAll({
      include: ["id", "name"]
    });

    commit("department/" + types.SET_DROPDOWN, departments.data.rows, {
      deep: true
    });
  }
};
