<template>
  <v-card :loading="loading">
    <v-form>
      <v-card-title>Add Children</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Children Name*" v-model="children.fullName" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <date-picker label="Birth Date*" v-model="children.birthDate" />
          </v-col>
        </v-row>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="showChildren(false)">Close</v-btn>
        <v-btn color="Add" :loading="loading" text @click="showChildren(false)">Save</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  data() {
    return {
      children: {
        fullName: "",
        birthDate: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      showChildren: "modal/showChildren"
    })
  }
};
</script>

<style>
</style>