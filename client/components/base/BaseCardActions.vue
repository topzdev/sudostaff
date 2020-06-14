<template>
  <div>
    <v-divider />
    <v-card-actions class="card-actions-btn">
      <v-btn text large block tile color="primary" :to="to">
        <slot />
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    to: [String, Object],
    action: Function
  }
};
</script>

<style>
.card-actions-btn {
  padding: 0 !important;
  overflow: hidden;
}

.card-actions-btn .v-btn {
  font-weight: 600 !important;
  padding: 10px 20px !important;
  height: 60px !important;
}

.card-actions-btn .v-btn__content {
  justify-content: unset;
}
</style>