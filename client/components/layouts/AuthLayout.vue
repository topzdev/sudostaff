<template>
  <div>
    <header>
      <base-navbar />
      <base-sidebar />
      <base-modals />
      <base-snackbars />
    </header>

    <main>
      <slot></slot>
    </main>
  </div>
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