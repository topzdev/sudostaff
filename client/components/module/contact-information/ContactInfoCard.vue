<template>
  <v-card :outlined="outlined" :flat="true">
    <form-card-header
      v-if="header"
      title="Contact Information"
      description="This information can be use to contact and emailing the employee."
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Email Address"
            type="email"
            :value="emailAddress"
            @input="$emit('update:emailAddress', $event)"
            outlined
            :rules="rules.emailAddress"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Cellphone No."
            :value="mobile"
            @input="$emit('update:mobile', $event)"
            outlined
            :rules="rules.mobile"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Telephone No."
            :value="landline"
            @input="$emit('update:landline', $event)"
            outlined
            :rules="rules.landline"
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