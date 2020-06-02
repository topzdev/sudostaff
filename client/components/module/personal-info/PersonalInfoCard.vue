<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Personal Information"
      description="Some personal info about the employee."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="First Name"
            :value="firstName"
            @input="$emit('update:firstName', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Last Name"
            :value="lastName"
            @input="$emit('update:lastName', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="8">
          <v-text-field
            label="Middle Name"
            :value="middleName"
            @input="$emit('update:middleName', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Extension Name"
            :value="extensionName"
            @input="$emit('update:extensionName', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <date-picker
            label="Birth Date"
            :value="birthDate"
            @input="$emit('update:birthDate', $event)"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Birth Place"
            :value="birthPlace"
            @input="$emit('update:birthPlace', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <gender-select :value="gender" @input="$emit('update:gender', $event)" />
        </v-col>
        <v-col cols="6">
          <civil-status-select :value="civilStatus" @input="$emit('update:civilStatus', $event)" />
        </v-col>
        <v-col cols="6">
          <citizenship-select :value="citizenship" @input="$emit('update:citizenship', $event)"></citizenship-select>
        </v-col>
        <v-col cols="6">
          <blood-type-select :value="bloodType" @input="$emit('update:bloodType', $event)" />
        </v-col>
        <v-col cols="6">
          <v-text-field
            type="number"
            label="Height"
            :value="height"
            @input="$emit('update:height', $event)"
            hide-details
            outlined
            suffix="cm"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            type="number"
            label="Weight"
            :value="weight"
            @input="$emit('update:weight', $event)"
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
  mixins: [CardMixin],
  props: [
    "firstName",
    "lastName",
    "middleName",
    "extensionName",
    "gender",
    "birthDate",
    "birthPlace",
    "civilStatus",
    "citizenship",
    "bloodType",
    "height",
    "weight"
  ]
};
</script>

<style>
</style>