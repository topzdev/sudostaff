<template>
  <v-card flat>
    <v-card-title class="align-center">
      <v-row>
        <v-col class="py-0 d-flex align-end">
          <div>Recent Leave Request</div>
        </v-col>
        <v-col class="py-0 d-flex align-end" cols="4">
          <leave-status-select v-model="status" dense hide-details />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" v-for="item in items" :key="item.id">
          <leave-request-card v-bind="item" />
        </v-col>
        <v-col>
          <div class="d-flex">
            <v-spacer />
            <v-btn color="primary">Load More</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      status: "",
      items: [
        {
          id: 1,
          employeeId: "EMP-001",
          startDate: "2020-06-30",
          endDate: "2020-07-10",
          leaveTypeId: "Vacation Leave",
          reason:
            "Im having fever and i thinks its getting worser day by day when i go to work.",
          requestStatus: "pending",
          authorizedComment: "",
          department: "Information Technology",
          departmentHead: "Mark Zuckerberg",
          department: "Information Technology",
          createdAt: "2020-06-07 16:23:54+08"
        },
        {
          id: 2,
          employeeId: "EMP-001",
          startDate: "2019-09-10",
          endDate: "2019-09-20",
          leaveTypeId: "Sick Leave",
          reason:
            "Im having fever and i thinks its getting worser day by day when i go to work.",
          requestStatus: "approved",
          authorizedComment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque quis ipsa explicabo deleniti dolorem. Exercitationem impedit error ducimus necessitatibus",
          departmentHead: "Mark Zuckerberg",
          department: "Information Technology",
          createdAt: "2019-08-07 16:23:54+08"
        },
        {
          id: 3,
          employeeId: "EMP-001",
          startDate: "2019-08-11",
          endDate: "2019-08-13",
          leaveTypeId: "Personal Leave",
          reason:
            "Im having fever and i thinks its getting worser day by day when i go to work.",
          requestStatus: "rejected",
          authorizedComment:
            "Los quis ipsa explicabo deleniti dolorem. Exercitationem impedit error ducimus necessitatibus",
          departmentHead: "Amy Sign",
          department: "Sales",
          createdAt: "2019-06-02 16:23:54+08"
        }
      ]
    };
  }
};
</script>

<style>
</style>