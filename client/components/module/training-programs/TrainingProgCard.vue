<template>
  <v-card :loading="loading" flat>
    <v-card-title>L & D Interventions / Training Programs Attended</v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Title*"
            :value="title"
            @input="$emit('update:title', $event)"
            :rules="rules.title"
            :readonly="isEdit"
            outlined
          />
        </v-col>

        <v-col class="py-0 pb-1" cols="6">
          <date-picker
            label="From"
            :value="from"
            @input="$emit('update:from', $event)"
            :rules="rules.from"
            :readonly="isEdit"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <date-picker
            label="To"
            :value="to"
            @input="$emit('update:to', $event)"
            :rules="rules.to"
            :readonly="isEdit"
          />
        </v-col>

        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Total Number of Hours"
            type="number"
            :value="totalHours"
            @input="$emit('update:totalHours', $event)"
            :rules="rules.totalHours"
            :readonly="isEdit"
            outlined
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Type"
            :value="type"
            @input="$emit('update:type', $event)"
            :rules="rules.type"
            :readonly="isEdit"
            outlined
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Sponsor"
            :value="sponsor"
            @input="$emit('update:sponsor', $event)"
            :rules="rules.sponsor"
            :readonly="isEdit"
            outlined
          />
        </v-col>
      </v-row>
      <small v-if="!isEdit">*indicates required field</small>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  props: ["title", "from", "to", "totalHours", "type", "sponsor"]
};
</script>

<style>
</style>