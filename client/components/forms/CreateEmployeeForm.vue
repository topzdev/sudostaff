<template>
  <v-form>
    <slot></slot>
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
      employee: {
        id: "",
        firstName: "",
        lastName: "",
        middleName: "",
        extensionName: "",
        birthDate: "05-15-2000",
        birthPlace: "",
        citizenship: "",
        emailAddress: "",
        landline: "",
        mobile: "",
        bloodType: "",
        height: 0,
        weight: 0,
        civilStatus: "",
        joiningDate: "",
        gender: "",
        isActive: true,
        familyDetailsId: 0,
        addressId: 0,
        governmentIssuedId: 0,
        designationId: 0
      }
    };
  },
  created() {
    this.$nuxt.$on("hello-world", data => {
      console.log(data);
    });
  }
};
</script>

<style>
</style>