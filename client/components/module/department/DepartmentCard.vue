<template>
  <v-card :outlined="outlined" :flat="true">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Department Name"
            :value="name"
            @input="$emit('update:name', $event)"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Description"
            :value="description"
            @input="$emit('update:description', $event)"
            outlined
          ></v-textarea>
        </v-col>

        <v-col cols="12">
          <search-employee-input
            :value="employeeId"
            @input="$emit('update:employeeId', $event)"
            :default-value="departmentHead"
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
  props: ["name", "description", "employeeId", "departmentHead"]
};
</script>

<style>
</style>