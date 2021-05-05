<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Default",

  // async beforeCreate() {
  //   if (process.browser)
  //     this.$vuetify.theme.dark =
  //       (await localStorage.getItem("hr-theme")) === "true" ? true : false;
  // },
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

.background-none {
  background-color: unset !important;
}

.settings-card__image {
  display: block;
  position: relative;
  height: 120px;
  margin-left: auto;
  margin-top: -50px;
  z-index: 0;
}

.settings-card .v-card__subtitle {
  position: relative;
  z-index: 1;
  width: 60%;
}
</style>