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
import BaseNavbar from "./navbars/BaseNavbar";
import BaseSidebar from "./sidebars/BaseSidebar";
export default {
  components: {
    BaseSidebar,
    BaseNavbar
  },
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