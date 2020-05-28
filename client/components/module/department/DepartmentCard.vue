<template>
  <v-card :outlined="outlined" :flat="true">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Department Name"
            :value="name"
            @input="$emit('update:name', $event)"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Description"
            :value="description"
            @input="$emit('update:description', $event)"
            hide-details
            outlined
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Deparment head"
            :value="headId"
            @input="$emit('update:headId', $event)"
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
  props: ["name", "description", "headId"]
};
</script>

<style>
</style>