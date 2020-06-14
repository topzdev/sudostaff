<template>
  <v-card outlined>
    <v-card-title class="title font-weight-regular">Employee Information</v-card-title>
    <v-card-subtitle>Something wrong with your information? Contact HR Department.</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col class="d-flex justify-center align-center" cols="12">
          <v-avatar size="180" style="border-radius: 100%">
            <base-image :src="workInfo.photoUrl" alt="John" draggable="false" />
          </v-avatar>
        </v-col>
        <v-col cols="12">
          <div class="overline">Name</div>
          <div
            class="subtitle-1"
          >{{workInfo.firstName}} {{workInfo.middleName}} {{workInfo.lastName}} {{workInfo.extensionName}}</div>
        </v-col>

        <v-col cols="6">
          <div class="overline">Employee ID</div>
          <div class="subtitle-1" v-text="workInfo.id"></div>
        </v-col>
        <v-col cols="6">
          <div class="overline">Joining Date</div>
          <div class="subtitle-1" v-text="joinedFormat"></div>
        </v-col>
        <v-col cols="12">
          <div class="overline">Department</div>
          <div class="subtitle-1" v-text="workInfo.department"></div>
        </v-col>
        <v-col cols="12">
          <div class="overline">Designation</div>
          <div class="subtitle-1" v-text="workInfo.designation"></div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      workInfo: {
        id: null,
        department: null,
        designation: null,
        firstName: null,
        middleName: null,
        extensionName: null,
        lastName: null,
        joiningDate: null,
        photoUrl: null
      }
    };
  },
  computed: {
    joinedFormat() {
      return this.workInfo.joiningDate
        ? dayjs(this.workInfo.joiningDate).format("MMMM DD, YYYY")
        : "";
    },
    getInfo() {
      return this.$store.state.personal.workInfo;
    }
  },
  methods: {
    loadData() {
      if (this.getInfo) {
        const result = JSON.parse(JSON.stringify(this.getInfo));
        const { designation, department, photo } = result;
        this.workInfo = result;
        this.workInfo.designation = designation.name;
        this.workInfo.photoUrl = photo ? photo.photoUrl : null;
        this.workInfo.department = department.name;
      }
    }
  },
  watch: {
    getInfo() {
      this.loadData();
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style>
</style>