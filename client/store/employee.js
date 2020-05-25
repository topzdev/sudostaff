export const state = () => ({
  current: {
    id: "",
    firstName: "",
    lastName: "",
    middleName: "",
    extensionName: "",
    birthDate: "05-15-2000",
    birthPlace: "",
    citizenship: "",
    emailAddress: "",
    landline: "",
    mobile: "",
    bloodType: "",
    height: 0,
    weight: 0,
    civilStatus: "",
    joiningDate: "",
    gender: "",
    isActive: true,
    familyDetailsId: 0,
    addressId: 0,
    governmentIssuedId: 0,
    designationId: 0
  }
});

export const mutations = {
  setCurrent(state, newCurrent) {
    state.current = newCurrent;
  }
};
