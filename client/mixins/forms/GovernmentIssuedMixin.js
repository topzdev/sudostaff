export default {
  data() {
    return {
      governmentIds: {
        governmentIssueId: "",
        idLicensePassportId: "",
        dateIssuance: "",
        placeIssuance: ""
      },

      governmentIdsRules: {
        governmentIssueId: [v => !!v || "Government Issued ID is required"],
        idLicensePassportId: [v => !!v || "Licenses and ID's are required"],
        dateIssuance: [v => !!v || "Date Issuance required"],
        placeIssuance: [v => !!v || "Place of Issuance is required"]
      }
    };
  }
};
