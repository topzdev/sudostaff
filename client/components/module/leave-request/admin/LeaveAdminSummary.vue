<template>
  <v-row class="mb-5">
    <v-col cols="3" v-for="item in list" :key="item.title" class="pt-0">
      <v-card outlined>
        <v-card :color="item.color+' lighten-5'" flat>
          <v-card-text>
            <div class="d-flex">
              <v-spacer />
              <div :class="item.textColor" class="display-2 font-weight-medium">{{item.value}}</div>
            </div>
          </v-card-text>
          <v-card-actions :class="item.color" class="lighten-4">
            <v-spacer />
            <div :class="item.textColor" class="font-weight-medium">{{item.title}}</div>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    list() {
      return [
        {
          color: "orange",
          value: this.count.pending,
          title: "Pending Request",
          textColor: "warning--text"
        },
        {
          color: "success",
          value: this.count.approved,
          title: "Approved Request",
          textColor: "success--text"
        },
        {
          color: "error",
          value: this.count.rejected,
          title: "Rejected Request",
          textColor: "error--text"
        },
        {
          color: "info",
          value: this.count.overall,
          title: "Leave Request Submited",
          textColor: "info--text"
        }
      ];
    },

    count() {
      return this.$store.state.leaveRequestAdmin.summary.count;
    }
  },

  mounted() {
    this.$store.dispatch("leaveRequestAdmin/fetchSummary");
  }
};
</script>

<style>
</style>