<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Address Details"
      description="Physical and residential address."
    ></form-card-header>

    <v-card-text>
      <div class="subtitle-2 mb-5">Father Information</div>
      <v-row class="mb-5">
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="First Name"
            :value="fatherFirstName"
            @input="$emit('update:fatherFirstName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Last Name"
            :value="fatherLastName"
            @input="$emit('update:fatherLastName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="8">
          <v-text-field
            label="Middle Name"
            :value="fatherMiddleName"
            @input="$emit('update:fatherMiddleName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="4">
          <v-text-field
            label="Extension Name"
            :value="fatherExt"
            @input="$emit('update:fatherExt', $event)"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-divider class="d-flex my-5" />

      <div class="subtitle-2 mb-5">Mother Information</div>
      <v-row class="mb-5">
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="First Name"
            :value="motherFirstName"
            @input="$emit('update:motherFirstName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Last Name"
            :value="motherLastName"
            @input="$emit('update:motherLastName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="8">
          <v-text-field
            label="Middle Name"
            :value="motherMiddleName"
            @input="$emit('update:motherMiddleName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="4">
          <v-text-field
            label="Extension Name"
            :value="motherExt"
            @input="$emit('update:motherExt', $event)"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-divider class="d-flex my-5" />

      <div class="subtitle-2 mb-5">Spouse Information</div>
      <v-row class="mb-5">
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="First Name"
            :value="spouseFirstName"
            @input="$emit('update:spouseFirstName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Last Name"
            :value="spouseLastName"
            @input="$emit('update:spouseLastName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="8">
          <v-text-field
            label="Middle Name"
            :value="spouseMiddleName"
            @input="$emit('update:spouseMiddleName', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="4">
          <v-text-field
            label="Extension Name"
            :value="spouseExt"
            @input="$emit('update:spouseExt', $event)"
            outlined
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
    "spouseFirstName",
    "spouseLastName",
    "spouseMiddleName",
    "spouseExt",
    "fatherFirstName",
    "fatherMiddleName",
    "fatherLastName",
    "fatherExt",
    "motherFirstName",
    "motherMiddleName",
    "motherLastName",
    "motherExt"
  ]
};
</script>

<style>
</style>