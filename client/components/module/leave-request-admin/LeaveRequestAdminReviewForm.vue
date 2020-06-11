<template>
  <v-form ref="form" v-model="valid">
    <v-card :loading="loading" flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-col cols="8" v-if="current">
        <leave-request-admin-review-card v-bind.sync="leaveRequest" :rules="leaveRequestRules" />
      </v-col>

      <v-col cols="8" class="py-0">
        <v-card flat>
          <v-card-actions>
            <v-btn @click="back" text>Cancel</v-btn>
            <v-spacer />
            <template v-if="leaveRequest.status === 'pending'">
              <v-btn color="error" @click="reject" large>Reject</v-btn>
              <v-btn color="success" @click="approve" large>Approved</v-btn>
            </template>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import FormMixin from "@/mixins/FormMixin";
import LeaveRequestAdminFormMixin from "@/mixins/forms/LeaveRequestAdminFormMixin";

export default {
  mixins: [FormMixin, LeaveRequestAdminFormMixin],

  methods: {
    async fetchData() {
      const id = this.$route.params.id;

      if (id) {
        await this.$store.dispatch("leaveRequestAdmin/fetchOneLeaveRequest", {
          id,
          query: {
            exclude: ["updatedAt", "deletedAt"],
            withLeaveType: true,
            withEmployee: true
          }
        });
        const data = JSON.parse(JSON.stringify(this.current));
        if (data) this.leaveRequest = data;
      }
    },

    async update(status) {
      this.$refs.form.validate();
      if (!this.valid) return;

      const { id, authorizedComment } = this.leaveRequest;

      this.loading = true;
      await this.$store.dispatch("leaveRequestAdmin/updateLeaveRequest", {
        id,
        status,
        authorizedComment
      });
      this.loading = false;
    },

    reject() {
      this.update("rejected");
    },

    approve() {
      this.update("approved");
    }
  },
  computed: {
    title() {
      return this.current ? "Review Leave Request" : "Create Leave Request";
    },
    subtitle() {
      return this.current
        ? "Send a comment about the request and mark it as Reject or Approved."
        : "Create and sumbit Leave Request";
    },
    current() {
      return this.$store.state.leaveRequestAdmin.current;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>