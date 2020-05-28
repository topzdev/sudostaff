<template>
  <v-container class="py-0">
    <v-card flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Your Information</v-card-title>
          <v-card-subtitle>View and edit your personal information</v-card-subtitle>
        </v-col>
      </v-row>

      <v-card-text class="py-0">
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col cols="12">
                <work-info :employee="employee"></work-info>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="12">
                <your-info-tabs />
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
        id: "EMP-2020-01",
        department: "IT Department",
        designation: "Senior Web Developer",
        joiningDate: "05-20-2020",
        imageId: "1",
        imageUrl: "https://cdn.vuetifyjs.com/images/john.jpg"
      }
    };
  }
};
</script>

<style>
</style>