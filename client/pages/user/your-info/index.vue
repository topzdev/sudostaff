<template>
  <auth-layout>
    <v-container>
      <v-card flat class="align-center background-none" tile>
        <v-row>
          <v-col class="py-0">
            <v-card-title class="display-1 font-weight-medium"
              >Your Information</v-card-title
            >
            <v-card-subtitle
              >View and edit your personal information</v-card-subtitle
            >
          </v-col>
        </v-row>

        <v-card-text class="py-0">
          <v-row>
            <v-col cols="4">
              <v-row>
                <v-col cols="12">
                  <your-work-info />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="8">
              <v-row>
                <v-col cols="12">
                  <your-info-tabs />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </auth-layout>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("personal/fetchPersonalInfo");
  },
};
</script>

<style>
</style>