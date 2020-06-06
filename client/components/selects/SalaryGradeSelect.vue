<template>
  <v-select
    :label="label"
    :items="items"
    :value="value"
    item-value="text"
    item-text="text"
    @input="$emit('input', $event)" :readonly="readonly"
    outlined
    :rules="rules"
  >
    <template v-slot:selection="data">{{convertToLetter(data.item.text)}}</template>
    <template v-slot:item="data">
      <v-list-item-content>
        <v-list-item-title>{{convertToLetter(data.item.text)}}</v-list-item-title>
        <v-list-item-subtitle class="overline">{{data.item.description}}</v-list-item-subtitle>
      </v-list-item-content>
    </template>
  </v-select>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  data() {
    return {
      items: [
        { text: "None", description: "less than ₱11,551" },
        { text: "1", description: "₱11,551" },
        { text: "2", description: "₱12,276" },
        { text: "3", description: "₱13,019" },
        { text: "4", description: "₱13,807" },
        { text: "5", description: "₱14,641" },
        { text: "6", description: "₱15,524" },
        { text: "7", description: "₱16,458" },
        { text: "8", description: "₱17,505" },
        { text: "9", description: "₱18,784" },
        { text: "10", description: "₱20,219" },
        { text: "11", description: "₱22,316" },
        { text: "12", description: "₱24,495" },
        { text: "13", description: "₱26,754" },
        { text: "14", description: "₱29,277" },
        { text: "15", description: "₱32,053" },
        { text: "16", description: "₱35,106" },
        { text: "17", description: "₱38,464" },
        { text: "18", description: "₱42,159" },
        { text: "19", description: "₱46,791" },
        { text: "20", description: "₱52,703" },
        { text: "21", description: "₱59,353" },
        { text: "22", description: "₱66,867" },
        { text: "23", description: "₱75,359" },
        { text: "24", description: "₱85,074" },
        { text: "25", description: "₱96,985" },
        { text: "26", description: "₱109,593" },
        { text: "27", description: "₱123,839" },
        { text: "28", description: "₱139,939" },
        { text: "29", description: "₱158,131" },
        { text: "30", description: "₱178,688" },
        { text: "31", description: "₱262,965" },
        { text: "32", description: "₱313,512" },
        { text: "33", description: "more than ₱395,858" }
      ]
    };
  },

  methods: {
    convertToLetter(number) {
      if (number === "None") return number;
      return "Grade " + number;
    }
  }
};
</script>

<style></style>
