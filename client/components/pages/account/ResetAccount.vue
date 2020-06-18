
<template>
  <v-card outlined class="settings-card">
    <v-card-title>Reset Account</v-card-title>
    <v-card-subtitle>Set employee account to default</v-card-subtitle>
    <v-card-text>
      <img class="settings-card__image" :src="image" />
    </v-card-text>
    <base-card-actions to="/account/reset-account">Let's get started</base-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/img/account-setting/reset-account.png")
    };
  }
};
</script>