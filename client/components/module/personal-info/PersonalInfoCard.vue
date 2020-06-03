<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Personal Information"
      description="Some personal info about the employee."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="First Name"
            :value="firstName"
            @input="$emit('update:firstName', $event)"
            required
            outlined
            :rules="rules.firstName"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Last Name"
            :value="lastName"
            @input="$emit('update:lastName', $event)"
            required
            outlined
            :rules="rules.lastName"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="8">
          <v-text-field
            label="Middle Name"
            :value="middleName"
            @input="$emit('update:middleName', $event)"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="4">
          <v-text-field
            label="Extension Name"
            :value="extensionName"
            @input="$emit('update:extensionName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <date-picker
            label="Birth Date"
            :value="birthDate"
            @input="$emit('update:birthDate', $event)"
            :rules="rules.birthDate"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Birth Place"
            :value="birthPlace"
            @input="$emit('update:birthPlace', $event)"
            outlined
            :rules="rules.birthPlace"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <gender-select
            :rules="rules.gender"
            :value="gender"
            @input="$emit('update:gender', $event)"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <civil-status-select
            :rules="rules.civilStatus"
            :value="civilStatus"
            @input="$emit('update:civilStatus', $event)"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <citizenship-select
            :rules="rules.citizenship"
            :value="citizenship"
            @input="$emit('update:citizenship', $event)"
          ></citizenship-select>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <blood-type-select
            :rules="rules.bloodType"
            :value="bloodType"
            @input="$emit('update:bloodType', $event)"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            type="number"
            label="Height"
            :value="height"
            @input="$emit('update:height', $event)"
            outlined
            suffix="cm"
            :rules="rules.height"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            type="number"
            label="Weight"
            :value="weight"
            @input="$emit('update:weight', $event)"
            outlined
            suffix="kg"
            :rules="rules.weight"
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