<template>
  <v-form>
    <v-card :loading="loading" flat class="align-center background-none">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
        </v-col>
      </v-row>

      <template v-if="allow">
        <v-col cols="8">
          <leave-submitted-card v-bind="leaveRequest" />
        </v-col>

        <v-col cols="8" class="py-0">
          <v-card flat class="background-none">
            <v-btn text large color="primary" @click="back">Back</v-btn>
          </v-card>
        </v-col>
      </template>
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";

export default {
  mixins: [FormMixin],

  data() {
    return {
      fallback: "/user/leave-request/",
      leaveRequest: {
        startDate: "",
        submittedBy: null,
        endDate: "",
        leaveTypeId: "",
        reason: "",
        status: "",
        authorizedComment: "",
        authorizedBy: null,
        leaveType: null
      }
    };
  },

  methods: {
    async fetchData() {
      const id = this.$route.params.id;

      if (id) {
        await this.$store.dispatch(
          "leaveRequestEmployee/fetchOneLeaveRequest",
          {
            id,
            query: {
              exclude: ["updatedAt", "deletedAt"],
              withEmployee: true,
              withLeaveType: true
            }
          }
        );
        const data = JSON.parse(JSON.stringify(this.current));
        if (data) this.leaveRequest = data;
      }
    }
  },
  computed: {
    title() {
      return "View Leave Request";
    },
    current() {
      return this.$store.state.leaveRequestEmployee.current;
    }
  },
  async created() {
    await this.fetchData();
    this.restrictPage(this.current.status === "pending");
  }
};
</script>

<style>
</style>