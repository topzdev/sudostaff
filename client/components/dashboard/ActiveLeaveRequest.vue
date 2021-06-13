<template>
  <v-card outlined :loading="loading">
    <form-card-header title="Active Leave Request"></form-card-header>
    <v-card-text style="padding: 0">
      <v-list two-line>
        <template v-if="items.length">
          <template v-for="item in items">
            <v-list-item :key="item.title">
              <nuxt-link
                :title="`${item.submittedBy.fullName}`"
                :to="`/employee/update/${item.submittedBy.id}`"
              >
                <v-list-item-avatar size="50">
                  <base-image
                    v-if="item.submittedBy.photo.photoUrl"
                    :src="item.submittedBy.photo.photoUrl"
                  />
                  <base-image v-else />
                </v-list-item-avatar>
              </nuxt-link>

              <v-list-item-content>
                <v-list-item-title>
                  <p style="padding: 0; margin: 0">{{ item.leaveType.name }}</p>
                </v-list-item-title>
                <v-list-item-subtitle
                  >{{ formatDate(item.startDate) }} to
                  {{ formatDate(item.endDate) }}</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-btn :to="`leave-request/view/${item.id}`" icon>
                  <v-icon color="grey lighten-1">mdi-eye</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </template>
        <template v-else>
          <v-subheader style="text-align: center">No items</v-subheader>
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
    const result = await dashboardServices.getActiveLeaveRequest();
    console.log(result);
    if (result.status) {
      this.items = result.data;
    }
    this.loading = false;
  },
};
</script>

