<template>
  <v-card outlined class="settings-card">
    <v-card-title>Manage Appearance</v-card-title>
    <v-card-subtitle>Change theme.</v-card-subtitle>
    <v-card-text class="px-2 pb-0">
      <v-list>
        <base-theme-toggle />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      mode: false
    };
  }
};
</script>
