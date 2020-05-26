<template>
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
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
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