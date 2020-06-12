<template>
  <v-card flat>
    <v-card-title class="align-center">
      <v-row>
        <v-col class="py-0 d-flex align-end">
          <div>Recent Leave Request</div>
        </v-col>
        <v-col class="py-0 d-flex align-end" cols="4">
          <leave-status-select v-model="status" dense hide-details />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-if="loading">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-col>
        <v-col v-else cols="12" v-for="item in list.rows" :key="item.id">
          <leave-card v-bind="item" />
        </v-col>
        <v-col>
          <div class="d-flex">
            <v-spacer />
            <v-btn color="primary">Load More</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      status: ""
    };
  },

  computed: {
    list() {
      return this.$store.state.leaveRequestEmployee.list;
    }
  },

  methods: {
    async fetchList() {
      this.loading = true;
      const self = this;

      setTimeout(async () => {
        await self.$store.dispatch("leaveRequestEmployee/fetchLeaveRequests", {
          exclude: ["deletedAt", "updatedAt"],
          status: self.status,
          withLeaveType: true
        });

        self.loading = false;
      }, 1000);
    }
  },

  watch: {
    status() {
      this.fetchList();
    }
  },

  mounted() {
    this.fetchList();
  }
};
</script>

<style>
</style>