<template>
  <v-container class="py-0">
    <v-card flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Create Employee</v-card-title>
          <v-card-subtitle>View and edit your personal information</v-card-subtitle>
        </v-col>
      </v-row>

      <v-card-text class="py-0">
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col cols="12">
                <v-card outlined>
                  <v-card-title class="title font-weight-regular">Employee Information</v-card-title>
                  <v-card-subtitle>Something wrong with your information? Contact HR Department.</v-card-subtitle>
                  <v-card-text>
                    <v-row>
                      <v-col class="d-flex justify-center align-center" cols="12">
                        <v-avatar size="180" style="border-radius: 100%">
                          <img :src="employee.imageUrl" alt="John" draggable="false" />
                        </v-avatar>
                      </v-col>
                      <v-col cols="6">
                        <div class="overline">Employee ID</div>
                        <div class="subtitle-1 black--text" v-text="employee.id"></div>
                      </v-col>
                      <v-col cols="6">
                        <div class="overline">Joining Date</div>
                        <div class="subtitle-1 black--text" v-text="joinedFormat"></div>
                      </v-col>
                      <v-col cols="12">
                        <div class="overline">Department</div>
                        <div class="subtitle-1 black--text" v-text="employee.department"></div>
                      </v-col>
                      <v-col cols="12">
                        <div class="overline">Designation</div>
                        <div class="subtitle-1 black--text" v-text="employee.designation"></div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="12">
                <employee-info-tab />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import dayjs from "dayjs";
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
  },

  computed: {
    joinedFormat() {
      return dayjs(this.employee.joiningDate).format("MMMM DD, YYYY");
    }
  }
};
</script>

<style>
</style>