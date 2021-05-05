<template>
  <v-container class="login-container">
    <login-form />
  </v-container>
</template>

<script>
export default {
  // created() {
  //   this.$store.dispatch("frontend/showNavigationBar", false);
  // },
};
</script>

<style>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh !important;
}

.login-form {
  padding-left: 40px;
  padding-right: 40px;
}
</style>