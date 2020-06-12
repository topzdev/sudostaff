<template>
  <v-chip
    :small="small"
    v-if="statuses.isApproved"
    color="success lighten-5 success--text"
    class="px-5"
  >
    <v-avatar v-if="icons" left>
      <v-icon>mdi-check-circle-outline</v-icon>
    </v-avatar>
    <b>Approved</b>
  </v-chip>
  <v-chip
    :small="small"
    v-else-if="statuses.isPending"
    color="orange lighten-5 orange--text"
    class="px-5"
  >
    <v-avatar v-if="icons" left>
      <v-icon>mdi-clock-outline</v-icon>
    </v-avatar>
    <span v-if="!admin">
      <b>Waiting for Approval</b>
    </span>
    <span v-else>
      <b>Pending</b>
    </span>
  </v-chip>
  <v-chip
    :small="small"
    v-else-if="statuses.isRejected"
    color="error lighten-5 error--text"
    class="px-5"
  >
    <v-avatar v-if="icons" left>
      <v-icon>mdi-close-circle-outline</v-icon>
    </v-avatar>
    <b>Rejected</b>
  </v-chip>
</template>

<script>
import LeaveUtils from "@/mixins/utils/LeaveUtils";
export default {
  mixins: [LeaveUtils],
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