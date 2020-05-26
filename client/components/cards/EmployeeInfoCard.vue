<template>
  <v-card outlined :loading="loading">
    <form-card-header
      v-if="header"
      title="Work Information"
      description="Company details of employee, assign identification and designation"
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Employee ID"
            :value="id"
            @input="$emit('update:id', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-select
            label="Deparment"
            item-text="name"
            item-value="departmentId"
            hide-details
            :value="departmentId"
            @input="$emit('update:departmentId', $event)"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-select
            label="Designation"
            disabled
            hide-details
            :value="designationId"
            @input="$emit('update:designationId', $event)"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="4">
          <date-picker
            label="Joining Date"
            :value="joiningDate"
            @input="$emit('update:joiningDate', $event)"
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
  props: ["joiningDate", "designationId", "departmentId", "id"]
};
</script>

<style>
</style>