<template>
  <v-card outlined :loading="loading">
    <form-card-header
      v-if="header"
      title="Work Information"
      description="Company details of employee, assign identification and designation"
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Employee ID"
            :value="id"
            @input="$emit('update:id', $event)"
            outlined
            :disabled="isEdit"
            required
            :rules="rules.id"
          ></v-text-field>
        </v-col>

        <v-col class="py-0 pb-1" cols="6">
          <department-dropdown
            :disabled="isEdit"
            :value="departmentId"
            :rules="rules.departmentId"
            required
            @input="$emit('update:departmentId', $event)"
          />
        </v-col>

        <v-col class="py-0 pb-1" cols="6">
          <designation-dropdown
            :value="designationId"
            :rules="rules.designationId"
            :disabled="departmentId && !isEdit ? false : true"
            @input="$emit('update:designationId', $event)"
            :departmentId="departmentId"
            required
          />
        </v-col>

        <v-col class="py-0 pb-1" cols="6">
          <date-picker
            label="Joining Date"
            :value="joiningDate"
            :rules="rules.joiningDate"
            required
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