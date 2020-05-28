<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Contact Information"
      description="This information can be use to contact and emailing the employee."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Email Address"
            type="email"
            :value="emailAddress"
            @input="$emit('update:emailAddress', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Cellphone No."
            :value="mobile"
            @input="$emit('update:mobile', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Telephone No."
            :value="landline"
            @input="$emit('update:landline', $event)"
            hide-details
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
  props: ["emailAddress", "mobile", "landline"]
};
</script>

<style>
</style>