<template>
  <v-form>
    <v-card :loading="loading" flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-col cols="8">
        <designation-card v-bind.sync="designation" :header="header" :outlined="outlined" />
      </v-col>

      <v-col cols="8" class="py-0">
        <v-card flat>
          <form-card-action
            :cancelFunc="back"
            :updateFunc="update"
            :saveFunc="create"
            :loading="loading"
            :is-edit="isEdit"
          />
        </v-card>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import FormMixin from "@/mixins/FormMixin";

export default {
  mixins: [FormMixin],
  data() {
    return {
      designation: {
        id: null,
        name: "",
        description: "",
        departmentId: null
      }
    };
  },
  methods: {
    async fetchData() {
      const id = this.$route.params.id;

      if (id && this.isEdit) {
        await this.$store.dispatch("designation/fetchOneDesignation", {
          id,
          query: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        const data = JSON.parse(JSON.stringify(this.current));
        if (data) this.designation = data;
      }
    },

    async create() {
      this.loading = true;
      await this.$store.dispatch(
        "designation/createDesignation",
        this.designation
      );
      this.loading = false;
    },

    async update() {
      this.loading = true;
      await this.$store.dispatch(
        "designation/updateDesignation",
        this.designation
      );
      this.loading = false;
    }
  },
  computed: {
    title() {
      return this.isEdit ? "Update Designation" : "Create Designation";
    },
    subtitle() {
      return this.isEdit
        ? "Edit Designation Information"
        : "Add Designation Information";
    },
    current() {
      return this.$store.state.designation.current;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>