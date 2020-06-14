import types from "./types";
import employeeServices from "@/services/Employee";
import createFormData from "@/utils/createFormData";
import addressServices from "@/services/Address";

export const state = () => ({
  departmentHead: null,
  loading: false,
  infoIds: {
    benifitsId: null,
    familyDetailsId: null,
    addressId: null,
    governmentIssuedId: null
  },
  workInfo: null,
  personalInfo: null,
  contactInfo: null,
  address: null,
  familyDetails: null,
  childrens: [],
  benifits: null,
  educationDetails: [],
  civilEligibility: [],
  workExperience: [],
  trainingPrograms: []
});

export const mutations = {
  [types.SET_PERSONAL_INFO](state, data) {
    const {
      id,
      emailAddress,
      landline,
      mobile,
      designation,
      department,
      firstName,
      middleName,
      lastName,
      joiningDate,
      extensionName,
      birthDate,
      birthPlace,
      citizenship,
      bloodType,
      height,
      weight,
      civilStatus,
      gender,
      photo,
      benifitsId,
      familyDetailsId,
      departmentHead,
      addressId,
      governmentIssuedId
    } = data;
    state.infoIds = {
      benifitsId,
      familyDetailsId,
      addressId,
      governmentIssuedId
    };
    state.workInfo = {
      id,
      department,
      designation,
      firstName,
      middleName,
      lastName,
      extensionName,
      joiningDate,
      photo
    };
    state.personalInfo = {
      firstName,
      middleName,
      lastName,
      extensionName,
      birthDate,
      birthPlace,
      citizenship,
      bloodType,
      height,
      weight,
      civilStatus,
      gender
    };
    state.contactInfo = { emailAddress, landline, mobile };
    state.departmentHead = departmentHead;
  },
  [types.UPDATE_PERSONAL_INFO](state, data) {
    state.personalInfo = data;
  },
  [types.SET_ADDRESS](state, data) {
    state.address = data;
  },
  [types.SET_LOADING](state, show) {
    state.loading = show;
  }
};

export const actions = {
  async fetchPersonalInfo({ commit, dispatch, rootState }) {
    try {
      const id = rootState.auth.user.employeeId;
      if (state.personalInfo && !id) return;
      commit(types.SET_LOADING, true);

      const result = await employeeServices.getOne(id, {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
        withPhoto: true,
        withDesignation: true,
        withDeptHead: true
      });

      commit(types.SET_PERSONAL_INFO, result.data);
      commit(types.SET_LOADING, false);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async updatePersonalInfo({ commit, dispatch, state, rootState }, data) {
    try {
      commit(types.SET_LOADING, true);
      const id = rootState.auth.user.employeeId;
      if (!id) return;

      const result = await employeeServices.update(
        createFormData({
          id,
          ...data
        })
      );
      commit(types.SET_PERSONAL_INFO, {
        ...state.personalInfo,
        ...state.workInfo,
        ...state.infoIds,
        ...state.contactInfo,
        ...data
      });
      commit(types.SET_LOADING, false);
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async fetchAddressDetails({ commit, dispatch, state, rootState }) {
    try {
      const id = rootState.auth.user.employeeId;
      if (state.address && !id) return;

      commit(types.SET_LOADING, true);

      const result = await addressServices.getOne(state.infoIds.addressId);

      commit(types.SET_ADDRESS, result.data);
      commit(types.SET_LOADING, false);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async updateAddressDetails({ commit, dispatch, state, rootState }, data) {
    try {
      const id = rootState.auth.user.employeeId;
      if (!id) return;

      commit(types.SET_LOADING, true);

      const result = await addressServices.update(
        createFormData({
          id: state.infoIds.addressId,
          ...data
        })
      );

      commit(types.SET_ADDRESS, data);
      commit(types.SET_LOADING, false);
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
