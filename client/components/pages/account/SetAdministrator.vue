
<template>
  <v-card outlined class="settings-card">
    <v-card-title>Set Administrator</v-card-title>
    <v-card-subtitle>Set employee as admin</v-card-subtitle>
    <v-card-text>
      <!-- <img class="settings-card__image" :src="image" /> -->
    </v-card-text>
    <base-card-actions to="/account/set-admin"
      >Let's get started</base-card-actions
    >
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/img/account-setting/reset-account.png"),
    };
  },
};
</script>