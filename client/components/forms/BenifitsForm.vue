<template>
  <v-form>
    <benifits-card v-bind.sync="benifits" :header="header" :outlined="outlined" />
    <v-card flat>
      <form-card-action :is-edit="isEdit" />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
export default {
  mixins: [FormMixin],
  data() {
    return {
      benifits: {
        id: "",
        gsisId: "",
        pagibigId: "",
        philhealthId: "",
        sssNo: "",
        tinNo: "",
        agencyEmployeerId: ""
      }
    };
  }
};
</script>

<style>
</style>