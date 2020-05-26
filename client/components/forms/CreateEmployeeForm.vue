<template>
  <v-form>
    <v-card flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Create Employee</v-card-title>
          <v-card-subtitle>Add basic information for employee</v-card-subtitle>
        </v-col>
      </v-row>

      <v-card-text class="py-0">
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col cols="12">
                <employee-info-card v-bind.sync="employee" />
              </v-col>

              <v-col cols="12">
                <personal-info-card v-bind.sync="employee" />
              </v-col>

              <v-col cols="12">
                <contact-info-card v-bind.sync="employee" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row>
              <v-col cols="12">
                <photo-info-card />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card flat>
      <form-card-action :is-edit="isEdit" />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
export default {
  mixins: [FormMixin],
  data() {
    return {
      employee: {
        id: "",
        firstName: "",
        lastName: "",
        middleName: "",
        extensionName: "",
        birthDate: "",
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
    };
  }
};
</script>

<style>
</style>