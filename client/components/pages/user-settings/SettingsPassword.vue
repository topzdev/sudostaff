<template>
  <v-card outlined class="settings-card">
    <v-card-title>Change Password</v-card-title>
    <v-card-subtitle>Protect account by adding a strong password</v-card-subtitle>
    <v-card-text>
      <base-image class="settings-card__image" :src="image"></base-image>
    </v-card-text>
    <base-card-actions to="/user/settings/change-password">Secure Account</base-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/img/account-setting/change-password-img.png")
    };
  }
};
</script>