<template>
  <span>
    <base-sidebar />
    <base-navbar />

    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>

    <base-modals />
    <base-snackbars />
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "TS HRIS",
    },
    showNavbar: {
      type: Boolean,
      default: true,
    },
    description: String,
  },
  head() {
    return {
      title: this.title,
      titleTemplate: "%s - TS HRIS",
    };
  },
  components: {},
};
</script>

<style>
</style>