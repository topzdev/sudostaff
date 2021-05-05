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
      default: "Swupp",
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
      titleTemplate: "%s - Swupp",
    };
  },
  components: {},
};
</script>

<style>
</style>