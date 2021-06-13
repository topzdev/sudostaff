<template>
  <v-card :outlined="outlined" :flat="true">
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-2" cols="12">
          <search-employee-input
            label="Select Employee"
            @input="$emit('update:employeeId', $event)"
            :value="employeeId"
            :rules="rules.employeeId"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  props: ["employeeId"],
};
</script>

<style>
</style>