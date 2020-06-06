<template>
  <v-form ref="form" v-model="valid">
    <v-card flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-card-text class="py-0">
        <v-row>
          <v-col cols="8">
            <v-row>
              <!-- <v-col v-if="isEdit" cols="12">
                <is-active-info-card v-bind="employee" />
              </v-col>-->
              <v-col cols="12">
                <work-info-card :is-edit="isEdit" v-bind.sync="employee" :rules="workRules" />
              </v-col>

              <v-col cols="12">
                <personal-info-card
                  :is-edit="isEdit"
                  v-bind.sync="employee"
                  :rules="personalRules"
                />
              </v-col>

              <v-col cols="12">
                <contact-info-card :is-edit="isEdit" v-bind.sync="employee" :rules="contactRules" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row>
              <v-col cols="12">
                <photo-info-card
                  :url="employee.photo ? employee.photo.photoUrl : null"
                  v-bind.sync="photoInfo"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card flat>
      <form-card-action
        :cancelFunc="back"
        :updateFunc="update"
        :saveFunc="create"
        :loading="loading"
        :is-edit="isEdit"
      />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import PersonalFormMixin from "@/mixins/forms/PersonalFormMixin";
import WorkFormMixin from "@/mixins/forms/WorkFormMixin";
import ContactFormMixin from "@/mixins/forms/ContactFormMixin";

export default {
  mixins: [FormMixin, PersonalFormMixin, WorkFormMixin, ContactFormMixin],
  data() {
    return {
      employee: {
        id: null,
        firstName: null,
        lastName: null,
        middleName: null,
        extensionName: null,
        birthDate: null,
        birthPlace: null,
        citizenship: null,
        emailAddress: null,
        landline: null,
        mobile: null,
        bloodType: null,
        height: null,
        weight: null,
        civilStatus: null,
        joiningDate: null,
        gender: null,
        isActive: true,
        familyDetailsId: null,
        addressId: null,
        governmentIssuedId: null,
        designationId: null,
        departmentId: null,
        photo: null
      },

      photoInfo: {
        imageUrl: null,
        raw: null
      }
    };
  },
  methods: {
    async fetchData() {
      const id = this.$route.params.id;

      if (id && this.isEdit) {
        await this.$store.dispatch("employee/fetchOneEmployee", {
          id,
          query: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
            withPhoto: true,
            withDesignation: true
          }
        });
        const data = JSON.parse(JSON.stringify(this.current));
        if (data) {
          this.employee = data;
          this.employee.departmentId = data.designation.department.id;
          this.employee.designationId = data.designation.id;
        }
        console.log(this.employee);
      }
    },
    async create() {
      this.$refs.form.validate();
      if (!this.valid) return;

      this.loading = true;
      await this.$store.dispatch("employee/createEmployee", {
        ...this.employee,
        photo: this.photoInfo.raw || null
      });
      this.loading = false;
    },

    async update() {
      this.$refs.form.validate();
      if (!this.valid) return;

      this.loading = true;
      /*confusing right? we neeed to pass the photoInfo raw which is the user photo selected from the file input to photo property because when creating and updating the server find the photo property of data which needed on uploading to photo server.
      
      and when fetching data the employee photo property is a old photo which we need to get rid when the user selected a new photo
      */
      await this.$store.dispatch("employee/updateEmployee", {
        ...this.employee,
        photo: this.photoInfo.raw || null
      });
      this.loading = false;
    }
  },
  computed: {
    title() {
      return this.isEdit ? "Update Employee" : "Create Employee";
    },
    subtitle() {
      return this.isEdit
        ? "Edit Employee Information"
        : "Add Employee Information";
    },
    current() {
      return this.$store.state.employee.current;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>