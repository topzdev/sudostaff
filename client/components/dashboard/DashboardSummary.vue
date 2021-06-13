<template>
  <v-row class="mt-2 mb-5">
    <v-col cols="3" v-for="item in list" :key="item.title" class="pt-0">
      <v-card :loading="loading" outlined>
        <v-card :color="item.color + ' lighten-5'" flat>
          <v-card-text>
            <div class="d-flex">
              <div :class="item.textColor" class="display-2 font-weight-medium">
                {{ item.value }}
              </div>
            </div>
          </v-card-text>
          <v-card-actions :class="item.color" class="lighten-4">
            <div :class="item.textColor" class="font-weight-medium">
              {{ item.title }}
            </div>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import dashboardServices from "@/services/dashboard";
export default {
  data() {
    return {
      loading: false,
      counts: {
        department: 0,
        designation: 0,
        employee: 0,
        leaveRequest: 0,
      },
    };
  },
  computed: {
    list() {
      const self = this;
      return [
        {
          // color: "orange",
          value: self.counts.employee,
          title: "Employee Count",
          textColor: "warning--text",
        },
        {
          // color: "success",
          value: self.counts.department,
          title: "Department Count",
          textColor: "success--text",
        },
        {
          // color: "error",
          value: self.counts.designation,
          title: "Designation Count",
          textColor: "error--text",
        },
        {
          // color: "info",
          value: self.counts.leaveRequest,
          title: "Leave Request Count",
          textColor: "info--text",
        },
      ];
    },
  },

  async fetch() {
    this.loading = true;
    const result = await dashboardServices.getCounts();
    console.log(result);

    if (result.status) {
      this.counts = result.data.counts;
    }
    this.loading = false;
  },
};
</script>

<style>
</style>