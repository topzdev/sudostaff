<template>
  <div>
    <template v-for="item in list">
      <v-chip :key="item.title" v-if="item.show" :small="small" :color="item.color" class="px-5">
        <v-avatar v-if="icons" left>
          <v-icon>{{item.icon}}</v-icon>
        </v-avatar>
        <b>{{item.title}}</b>
      </v-chip>
    </template>
  </div>
</template>

<script>
import LeaveUtils from "@/mixins/utils/LeaveUtils";
export default {
  inject: ["theme"],
  mixins: [LeaveUtils],
  computed: {
    list() {
      return [
        {
          color: this.theme.isDark ? "green" : "green lighten-5 green--text",
          title: "Approved",
          icon: "mdi-check-circle-outline",
          show: this.statuses.isApproved
        },
        {
          color: this.theme.isDark ? "orange" : "orange lighten-5 orange--text",
          title: "Waiting for Approval",
          icon: "mdi-clock-outline",
          show: this.statuses.isPending
        },
        {
          color: this.theme.isDark ? "error" : "error lighten-5 error--text",
          title: "Rejected",
          icon: "mdi-close-circle-outline",
          show: this.statuses.isRejected
        }
      ];
    }
  },
  props: {
    status: {
      type: String
    },
    icons: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    admin: {
      type: Boolean
    }
  }
};
</script>

<style>
</style>