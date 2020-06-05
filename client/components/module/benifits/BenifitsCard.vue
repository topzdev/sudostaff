<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Benifits"
      description="Beneficiaries Information like SSS, GSIS etc."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="GSIS ID No."
            :value="gsisId"
            @input="$emit('update:gsisId', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="PAGIBIG ID No."
            :value="pagibigId"
            @input="$emit('update:pagibigId', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="PHILHEALTH TIN ID No."
            :value="philhealthId"
            @input="$emit('update:philhealthId', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="SSS No."
            :value="sssNo"
            @input="$emit('update:sssNo', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="TIN No."
            :value="tinNo"
            @input="$emit('update:tinNo', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Agency Employee No."
            :value="agencyEmployeerId"
            @input="$emit('update:agencyEmployeerId', $event)"
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
    "gsisId",
    "pagibigId",
    "philhealthId",
    "sssNo",
    "tinNo",
    "agencyEmployeerId"
  ]
};
</script>

<style>
</style>