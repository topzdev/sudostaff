<template>
  <v-tooltip :color="color" left>
    <template v-slot:activator="{ on }">
      <v-btn
        :color="color"
        :to="to"
        v-on="on"
        fixed
        fab
        x-large
        dark
        bottom
        right
        style="bottom: 40px; right: 40px"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <span>{{tooltip}}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/"
    },
    tooltip: {
      type: String,
      default: "Tooltip message here"
    },
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style>
</style>