<template>
  <v-container>
    <v-card flat class="align-center background-none" tile>
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Account Settings</v-card-title>
          <v-card-subtitle>Change password, username and more.</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text class="py-0">
        <v-row>
          <v-col cols="8">
            <settings-password />
          </v-col>
          <v-col cols="8">
            <settings-username />
          </v-col>
          <v-col cols="8">
            <settings-appearance />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.settings-card__image {
  display: block;
  position: relative;
  height: 120px;
  margin-left: auto;
  margin-top: -50px;
}
</style>