<template>
  <v-form ref="form" v-model="valid">
    <v-card :loading="loading" flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-col cols="8">
        <v-slide-x-transition hide-on-leave>
          <leave-request-form-card
            v-if="page === 1"
            v-bind.sync="leaveRequest"
            :header="header"
            :outlined="outlined"
            :rules="leaveRequestRules"
          />
        </v-slide-x-transition>

        <v-slide-x-reverse-transition hide-on-leave>
          <leave-request-form-summary v-bind="leaveRequest" v-if="page === 2" />
        </v-slide-x-reverse-transition>
      </v-col>

      <v-col cols="8" class="py-0">
        <v-card flat>
          <form-card-action
            :cancelFunc="backPage"
            :updateFunc="nextPage"
            :saveFunc="nextPage"
            :saveText="saveText"
            :updateText="updateText"
            :cancelText="cancelText"
            :loading="loading"
            :is-edit="current ? true : false"
          />
        </v-card>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import FormMixin from "@/mixins/FormMixin";
import LeaveRequestFormMixin from "@/mixins/forms/LeaveRequestFormMixin";

export default {
  mixins: [FormMixin, LeaveRequestFormMixin],
  data() {
    return {
      page: 1,
      saveText: "Next",
      cancelText: "Cancel",
      updateText: "Next"
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
            query: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
          }
        );
        const data = JSON.parse(JSON.stringify(this.current));
        if (data) this.leaveRequest = data;
      }
    },
    async create() {
      this.loading = true;
      console.log("Creatinngg!!!");
      await this.$store.dispatch(
        "leaveRequestEmployee/createLeaveRequest",
        this.leaveRequest
      );
      this.loading = false;
    },

    nextPage() {
      this.$refs.form.validate();
      if (this.valid && this.page === 1) {
        this.page++;
        console.log(this.page);
        this.setButtonText();
        return;
      }

      if (this.current) this.update();
      else this.create();
    },

    backPage() {
      this.page--;
      if (this.page < 1) {
        this.back();
        this.page = 1;
      }
      this.setButtonText();
    },

    setButtonText() {
      if (this.page === 1) {
        this.cancelText = "Cancel";
        this.saveText = "Next";
        this.updateText = "Next";
      } else {
        this.cancelText = "Back";
        this.saveText = "Sumbit";
        this.updateText = "Update";
      }
    },

    async update() {
      this.$refs.form.validate();
      if (!this.valid) return;

      this.loading = true;
      await this.$store.dispatch(
        "leaveRequestEmployee/updateLeaveRequest",
        this.leaveRequest
      );
      this.loading = false;
    }
  },
  computed: {
    title() {
      return this.current ? "Update Leave Request" : "Create Leave Request";
    },
    subtitle() {
      return this.current
        ? "Edit Leave Request"
        : "Create and sumbit Leave Request";
    },
    current() {
      return this.$store.state.leaveRequestEmployee.current;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>