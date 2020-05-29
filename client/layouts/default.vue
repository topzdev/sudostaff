<template>
  <v-app>
    <base-navbar />
    <base-sidebar />
    <modals />
    <snackbars />
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
import Modals from "./modals";
import Snackbars from "./snackbars";
export default {
  name: "Default",
  components: {
    BaseSidebar,
    BaseNavbar,
    Modals,
    Snackbars
  },
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.v-application {
  font-family: "Poppins" !important;
}
</style>