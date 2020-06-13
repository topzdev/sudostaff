<template>
  <v-app>
    <base-navbar />
    <base-sidebar />
    <base-modals />
    <base-snackbars />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "Default",

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
  padding: 0 25px !important;
}

.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 8px !important;
}

.v-btn:not(.v-btn--round).v-size--large {
  padding: 0 30px;
}

.v-text-field--outlined fieldset {
  border-color: none !important;
}
</style>