<template>
  <v-container class="py-0">
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
                <v-card outlined>
                  <v-card-title class="title font-weight-regular">Work Information</v-card-title>
                  <v-card-subtitle>Company details of employee, assign identification and designation</v-card-subtitle>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="Employee ID" hide-details outlined></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-select label="Deparment" hide-details outlined></v-select>
                      </v-col>
                      <v-col cols="4">
                        <v-select label="Designation" disabled hide-details outlined></v-select>
                      </v-col>
                      <v-col cols="4">
                        <date-picker label="Joining Date" v-model="employee.joiningDate" />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card outlined>
                  <v-card-title class="title font-weight-regular">Personal Information</v-card-title>
                  <v-card-subtitle>Some personal info about the employee.</v-card-subtitle>
                  <v-card-text>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field label="First Name" hide-details outlined></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field label="Last Name" hide-details outlined></v-text-field>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field label="Middle Name" hide-details outlined></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field label="Extension Name" hide-details outlined></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <date-picker label="Birth Date" v-model="employee.birthDate" />
                      </v-col>
                      <v-col cols="6">
                        <v-text-field label="Birth Place" hide-details outlined></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-select label="Gender" hide-details outlined></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-select label="Civil Status" hide-details outlined></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-select label="Citizenship" hide-details outlined></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-select label="Blood Type" hide-details outlined></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          type="number"
                          label="Height"
                          hide-details
                          outlined
                          suffix="cm"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          type="number"
                          label="Weight"
                          hide-details
                          outlined
                          suffix="kg"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" large text>Cancel</v-btn>
                  <v-btn color="primary" large width="200">Save</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row>
              <v-col cols="12">
                <v-card outlined>
                  <v-card-title class="title font-weight-regular">Employee Photo</v-card-title>
                  <v-card-subtitle>A photo helps to identify who the employee is.</v-card-subtitle>
                  <v-card-text class="d-flex justify-center align-center">
                    <v-avatar size="240" style="border-radius: 100%">
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        draggable="false"
                      />
                    </v-avatar>
                  </v-card-text>
                  <v-card-actions>
                    <v-file-input
                      type="file"
                      prepend-icon
                      prepend-inner-icon="mdi-image"
                      label="Select employee photo"
                      hide-details
                      outlined
                    ></v-file-input>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      employee: {
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
    };
  }
};
</script>

<style >
</style>