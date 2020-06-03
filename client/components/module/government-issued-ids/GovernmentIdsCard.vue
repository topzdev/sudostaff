<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Government Issued ID's"
      description="License and other govermental identifications."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Government Issued ID"
            :value="governmentIssueId"
            @input="$emit('update:governmentIssueId', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="ID/License/Passport No."
            :value="idLicensePassportId"
            @input="$emit('update:idLicensePassportId', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <date-picker
            label="Date of Issuance"
            :value="dateIssuance"
            @input="$emit('update:dateIssuance', $event)"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Place of Issuance"
            :value="placeIssuance"
            @input="$emit('update:placeIssuance', $event)"
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
    "governmentIssueId",
    "idLicensePassportId",
    "dateIssuance",
    "placeIssuance"
  ]
};
</script>

<style>
</style>