<template>
  <div>
    <v-alert :type="balanceType">
      You currently have
      <b>{{balance || 0}}</b> leave request balance for this year
      <b>2020</b>.
    </v-alert>
  </div>
</template>

<script>
export default {
  props: ["balance"],
  computed: {
    balanceType() {
      if (this.balance >= 1) return "info";
      return "error";
    }
  }
};
</script>

<style>
</style>