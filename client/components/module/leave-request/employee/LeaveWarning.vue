<template>
  <div v-if="balance !== null">
    <v-alert :type="balanceType">
      You currently have
      <b>{{balance || 0}}</b> leave request balance for this year
      <b>2020</b>.
    </v-alert>
  </div>
</template>

<script>
export default {
  computed: {
    balanceType() {
      if (this.balance >= 1) return "blue";
      return "error";
    },
    balance() {
      return this.$store.state.leaveRequestEmployee.summary.balance;
    }
  }
};
</script>

<style>
</style>