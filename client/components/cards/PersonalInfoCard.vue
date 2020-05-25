<template>
  <v-card outlined>
    <form-card-header
      v-if="header"
      title="Personal Information"
      description="Some personal info about the employee."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field label="First Name" v-model="employee.firstName" hide-details outlined></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field label="Last Name" v-model="employee.lastName" hide-details outlined></v-text-field>
        </v-col>
        <v-col cols="8">
          <v-text-field label="Middle Name" v-model="employee.middleName" hide-details outlined></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Extension Name"
            v-model="employee.extensionName"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <date-picker label="Birth Date" v-model="employee.birthDate" />
        </v-col>
        <v-col cols="6">
          <v-text-field label="Birth Place" v-model="employee.birthPlace" hide-details outlined></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select label="Gender" v-model="employee.birthPlace" hide-details outlined></v-select>
        </v-col>
        <v-col cols="6">
          <v-select label="Civil Status" v-model="employee.civilStatus" hide-details outlined></v-select>
        </v-col>
        <v-col cols="6">
          <v-select label="Citizenship" v-model="employee.citizenship" hide-details outlined></v-select>
        </v-col>
        <v-col cols="6">
          <v-select label="Blood Type" v-model="employee.bloodType" hide-details outlined></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            type="number"
            label="Height"
            v-model="employee.height"
            hide-details
            outlined
            suffix="cm"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            type="number"
            label="Weight"
            v-model="employee.weight"
            hide-details
            outlined
            suffix="kg"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  inject: ["personalInfo"],
  mixins: [CardMixin]
};
</script>

<style>
</style>