<template>
  <v-form ref="form" v-model="valid">
    <v-card :loading="loading" flat class="align-center background-none">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-col cols="8">
        <department-card
          v-bind.sync="department"
          :header="header"
          :outlined="outlined"
          :rules="departmentRules"
        />
      </v-col>

      <v-col cols="8" class="py-0">
        <v-card flat class="background-none">
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
import DepartmentFormMixin from "@/mixins/forms/DeparmentFornMixin";

export default {
  mixins: [FormMixin, DepartmentFormMixin],

  methods: {
    async fetchData() {
      const id = this.$route.params.id;

      if (id && this.isEdit) {
        await this.$store.dispatch("department/fetchOneDepartment", {
          id,
          query: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        const data = JSON.parse(JSON.stringify(this.current));
        if (data) {
          const { description, id, name, departmentHead } = data;

          const employeeId = departmentHead.employee
            ? departmentHead.employee.id
            : null;

          this.department = {
            description,
            id,
            name,
            departmentHead,
            employeeId
          };
        }
      }
    },

    async create() {
      this.$refs.form.validate();
      if (!this.valid) return;

      this.loading = true;
      await this.$store.dispatch(
        "department/createDepartment",
        this.department
      );
      this.loading = false;
    },

    async update() {
      this.$refs.form.validate();
      if (!this.valid) return;

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
        ? "Edit Department Information"
        : "Add Department Information";
    },
    current() {
      return this.$store.state.department.current;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>