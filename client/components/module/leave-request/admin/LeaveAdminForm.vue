<template>
  <v-form ref="form" v-model="valid">
    <v-card :loading="loading" flat class="align-center background-none">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <template v-if="allow">
        <v-col cols="8" v-if="current">
          <leave-submitted-card
            :rules="leaveRequestRules"
            v-bind.sync="{...leaveRequest, admin: true}"
          />
        </v-col>

        <v-col cols="8" class="py-0">
          <v-card flat class="background-none">
            <v-card-actions>
              <v-btn @click="back" text>Cancel</v-btn>
              <v-spacer />
              <template>
                <v-btn color="error" @click="reject" large>Reject</v-btn>
                <v-btn color="success" @click="approve" large>Approved</v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import FormMixin from "@/mixins/FormMixin";
import LeaveAdminMixin from "@/mixins/forms/LeaveAdminMixin";

export default {
  mixins: [FormMixin, LeaveAdminMixin],

  data() {
    return { fallback: "/leave-request/" };
  },

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

      const { id, authorizedComment, employeeId } = this.leaveRequest;

      this.loading = true;
      await this.$store.dispatch("leaveRequestAdmin/updateLeaveRequest", {
        id,
        status,
        employeeId,
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

  async created() {
    await this.fetchData();
    this.restrictPage(this.current.status !== "pending");
  }
};
</script>

<style>
</style>