<template>
  <v-text-field
    label="Employee ID"
    :value="value"
    @input="checkId($event)"
    outlined
    :readonly="readonly"
    :error="error ? true : false"
    :error-messages="error"
    :success="success ? true : false"
    :success-messages="success"
    :rules="rules"
    required
  ></v-text-field>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
import employeeServices from "@/services/Employee";
export default {
  mixins: [InputMixin],
  data() {
    return {
      error: "",
      success: ""
    };
  },
  methods: {
    async checkId(e) {
      this.$emit("input", e.toUpperCase());
      if (!e) {
        this.error = "";
        this.success = "";

        return;
      }
      const self = this;
      setTimeout(async () => {
        const result = await employeeServices.checkId(e.toUpperCase());
        console.log(result);

        if (!result.data) {
          self.success = "Employee ID is available";
          self.error = "";
        } else {
          self.success = "";
          self.error = "Employee ID is not available";
        }
      }, 500);
    }
  }
};
</script>

<style>
</style>