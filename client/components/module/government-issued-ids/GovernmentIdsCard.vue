<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Government Issued ID's"
      description="License and other govermental identifications."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Government Issued ID"
            :rules="rules.governmentIssueId"
            :value="governmentIssueId"
            @input="$emit('update:governmentIssueId', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="ID/License/Passport No."
            :rules="rules.idLicensePassportId"
            :value="idLicensePassportId"
            @input="$emit('update:idLicensePassportId', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <date-picker
            label="Date of Issuance"
            :rules="rules.dateIssuance"
            :value="dateIssuance"
            @input="$emit('update:dateIssuance', $event)"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Place of Issuance"
            :rules="rules.placeIssuance"
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