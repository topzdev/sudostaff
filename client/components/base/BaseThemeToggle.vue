<template>
  <v-list-item>
    <v-row>
      <v-col cols="6" class="body-1">
        <v-icon v-if="icon" class="mr-2">mdi-theme-light-dark</v-icon>
        <span>Theme</span>
      </v-col>
      <v-col cols="6">
        <div class="d-flex align-center justify-end">
          <v-icon color="yellow darken-1">mdi-white-balance-sunny</v-icon>
          <span class="pl-4">
            <v-switch v-model="$vuetify.theme.dark" hide-details inset></v-switch>
          </span>
          <v-icon color="light-blue">mdi-weather-night</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script>
export default {
  props: {
    icon: Boolean
  },

  watch: {
    "$vuetify.theme.dark"() {
      if (process.browser)
        localStorage.setItem("hr-theme", this.$vuetify.theme.dark);
    }
  },

  methods: {
    toggleDarkMode() {
      console.log("Toggle");
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style>
.v-input--selection-controls {
  padding-top: 0 !important;
  margin-top: 0 !important;
}
</style>