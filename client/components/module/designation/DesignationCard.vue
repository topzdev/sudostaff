<template>
  <v-card :outlined="outlined" :flat="true">
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Designation Name"
            :value="name"
            @input="$emit('update:name', $event)"
            outlined
            :rules="rules.name"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="12">
          <v-textarea
            label="Description"
            :value="description"
            @input="$emit('update:description', $event)"
            outlined
          ></v-textarea>
        </v-col>

        <v-col class="py-0 pb-1" cols="12">
          <department-dropdown
            :value="departmentId"
            @input="$emit('update:departmentId', $event)"
            :rules="rules.departmentId"
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
  props: ["name", "description", "departmentId", "department"]
};
</script>

<style>
</style>