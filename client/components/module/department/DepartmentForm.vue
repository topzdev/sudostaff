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
        <department-card v-bind.sync="department" :header="header" :outlined="outlined" />
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
      department: {
        id: null,
        name: "",
        description: "",
        employeeId: null
      }
    };
  },
  methods: {
    async fetchData() {
      const id = this.$route.params.id;
      if (id && this.isEdit) {
        await this.$store.dispatch("department/fetchOneDepartment", id);
        this.department = JSON.parse(JSON.stringify(this.current));
      }
    },

    async create() {
      this.loading = true;
      await this.$store.dispatch(
        "department/createDepartment",
        this.department
      );
      this.loading = false;
    },

    async update() {
      this.loading = true;
      await this.$store.dispatch(
        "department/updateDepartment",
        this.department
      );
      this.loading = false;
    }
  },
  computed: {
    title() {
      return this.isEdit ? "Update Department" : "Create Department";
    },
    subtitle() {
      return this.isEdit
        ? "Edit Deparment Information"
        : "Add Deparment Information";
    },
    current() {
      return this.$store.state.department.current;
    }
  },
  created() {
    this.fetchData();
  },
  beforeDestroy() {}
};
</script>

<style>
</style>