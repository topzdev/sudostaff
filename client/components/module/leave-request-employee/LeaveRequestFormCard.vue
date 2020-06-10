<template>
  <v-card :outlined="outlined" :flat="true">
    <v-card-text>
      <v-row>
        <v-col class="pb-2" cols="12">
          <leave-type-select
            label="Leave Type"
            :value="leaveTypeId"
            @input="$emit('update:leaveTypeId', $event)"
            :rules="rules.leaveTypeId"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <date-picker
            label="Date Start"
            :value="startDate"
            @input="$emit('update:startDate', $event)"
            :rules="rules.startDate"
            :format="format"
            :min="minDate"
            :max="endDate"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <date-picker
            label="Date End"
            :value="endDate"
            @input="$emit('update:endDate', $event)"
            :rules="rules.endDate"
            :format="format"
            :min="endMinDate"
          />
        </v-col>

        <v-col class="py-0 pb-1" cols="12">
          <v-textarea
            label="Reason"
            :value="reason"
            @input="$emit('update:reason', $event)"
            :rules="rules.reason"
            outlined
          ></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
import dayjs from "dayjs";
export default {
  mixins: [CardMixin],
  props: ["startDate", "endDate", "leaveTypeId", "reason", "status", "range"],
  computed: {
    minDate() {
      return dayjs().format("YYYY-MM-DD");
    },

    endMinDate() {
      return this.startDate || this.minDate;
    },

    format() {
      return "MMMM D, YYYY - dddd";
    }
  }
};
</script>

