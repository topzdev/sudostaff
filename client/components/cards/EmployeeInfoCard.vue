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

        <v-col cols="6">
          <department-dropdown :value="departmentId" @input="$emit('update:departmentId', $event)" />
        </v-col>

        <v-col cols="6">
          <designation-dropdown
            :value="designationId"
            :disabled="departmentId ? false : true"
            @input="$emit('update:designationId', $event)"
            :departmentId="departmentId"
          />
        </v-col>

        <v-col cols="6">
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