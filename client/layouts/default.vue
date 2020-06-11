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
.v-input__slot {
  margin-bottom: 4px;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 10px;
}

.v-btn {
  text-transform: none !important;
}

.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 8px !important;
}
</style>