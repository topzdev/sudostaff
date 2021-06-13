<template>
  <v-card outlined :loading="loading">
    <form-card-header title="Recently Added Employee"></form-card-header>
    <v-card-text style="padding: 0">
      <v-list two-line>
        <template v-if="items.length">
          <template v-for="item in items">
            <v-list-item :key="item.title">
              <v-list-item-avatar size="50">
                <base-image
                  v-if="item.photo.photoUrl"
                  :src="item.photo.photoUrl"
                />
                <base-image v-else />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <v-chip small>{{ item.id }}</v-chip>
                  <p style="padding: 0; margin: 0">{{ item.fullName }}</p>
                </v-list-item-title>
                <v-list-item-subtitle
                  >Added at
                  {{ formatDate(item.createdAt) }}</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-btn :to="`/employee/update/${item.id}`" icon>
                  <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </template>
        <template v-else>
          <v-subheader>No items</v-subheader>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import dashboardServices from "@/services/dashboard";
export default {
  data() {
    return {
      loading: false,
      items: [],
    };
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format("MMMM DD YYYY h:m:s a");
    },
  },
  async fetch() {
    this.loading = true;
    const result = await dashboardServices.getRecentAddedEmployee();
    console.log(result);

    if (result.status) {
      this.items = result.data;
    }
    this.loading = false;
  },
};
</script>

<style>
</style>