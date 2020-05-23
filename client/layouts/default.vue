<template>
  <v-app>
    <base-navbar />
    <base-sidebar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.v-application {
  font-family: "Open Sans" !important;
}
</style>
